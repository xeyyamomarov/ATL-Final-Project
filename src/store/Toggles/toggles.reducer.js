import { TOGGLES_ACTION_TYPES } from './toggles.action-types';

const togglesInit = {
  AddNewUserDialog: false,
  EditUserDialog: false,
  PasswordUpdateDialog: false,
  DeactivateUser: false,
  SearchForm: false,
  PasswordHidden: true,
  PasswordRepeatHidden: true,
}


export const togglesReducer = (store = togglesInit, action) => {
  switch (action.type) {
    case TOGGLES_ACTION_TYPES.ADD_NEW_USER_DIALOG:
      return {
        ...store,
        AddNewUserDialog: !store.AddNewUserDialog
      };
    case TOGGLES_ACTION_TYPES.EDIT_USER_DIALOG:
      return {
        ...store,
        EditUserDialog: !store.EditUserDialog
      };
    case TOGGLES_ACTION_TYPES.PASSWORD_UPDATE_DIALOG:
      return {
        ...store,
        PasswordUpdateDialog: !store.PasswordUpdateDialog
      };
    case TOGGLES_ACTION_TYPES.DEACTIVATE_USER:
      return {
        ...store,
        DeactivateUser: !store.DeactivateUser
      };
    case TOGGLES_ACTION_TYPES.SEARCH_FORM:
      return {
        ...store,
        SearchForm: !store.SearchForm
      };
    case TOGGLES_ACTION_TYPES.PASSWORD_HIDDEN:
      return {
        ...store,
        PasswordHidden: !store.PasswordHidden
      };
    case TOGGLES_ACTION_TYPES.PASSWORD_REPEAT_HIDDEN:
      return {
        ...store,
        PasswordRepeatHidden: !store.PasswordRepeatHidden
      };

    default: return store;
  }
}