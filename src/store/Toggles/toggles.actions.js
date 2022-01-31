import { TOGGLES_ACTION_TYPES } from "./toggles.action-types"

export const setAddNewUserDialog = () => ({type: TOGGLES_ACTION_TYPES.ADD_NEW_USER_DIALOG });
export const setEditUserDialog = () => ({type: TOGGLES_ACTION_TYPES.EDIT_USER_DIALOG });
export const setPasswordUpdateDialog = () => ({type: TOGGLES_ACTION_TYPES.PASSWORD_UPDATE_DIALOG });
export const setDeactivateUser = () => ({type: TOGGLES_ACTION_TYPES.DEACTIVATE_USER });
export const setSearchForm = () => ({type: TOGGLES_ACTION_TYPES.SEARCH_FORM });
export const setPasswordHidden = () => ({type: TOGGLES_ACTION_TYPES.PASSWORD_HIDDEN });
export const setPasswordRepeatHidden = () => ({type: TOGGLES_ACTION_TYPES.PASSWORD_REPEAT_HIDDEN });
