import { useState } from "react";
import {
  DialogContent,
  DialogTitle,
  Dialog,
  DialogActions,
  Box,
  IconButton,
  InputAdornment,
  Grid,
  TextField as MuiTextField,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { SubmitButton, CloseButton } from "../Buttons";
import { Formik, Form, Field } from "formik";
import { Autocomplete } from 'formik-mui';
import { useSelector, useDispatch } from 'react-redux';
import { TOGGLES_SELECTORS, TOGGLES_ACTIONS } from "store/Toggles";
import * as Yup from "yup";
import { TOGGLES_ACTION_TYPES } from "store/Toggles/toggles.action-types";

const positions = [
  "User",
  "Reporter",
  "Admin",
  "Manager",
];

const initialValues = {
  fullName: "",
  username: "",
  position: [],
  password: "",
  passwordRepeat: "",
}

const onSubmit = (values, { resetForm }) => {
  console.log(values);
  resetForm()
}

// const validationSchema = Yup.object({
//   fullName: Yup.string().required("Required!"),
//   username: Yup.string().required("Required!"),
//   positions: Yup.string().required("Required!"),
//   password: Yup.string().required("Required!"),
//   passwordRepeat: Yup.string().required("Required!"),
// });

const AddNewUserDialog = () => {

  const dispatch = useDispatch();
  const passwordHidden = useSelector(TOGGLES_SELECTORS.getPasswordHidden);
  const handlePasswordHidden = () => dispatch(TOGGLES_ACTIONS.setPasswordHidden());
  const passwordRepeatHidden = useSelector(TOGGLES_SELECTORS.getPasswordRepeatHidden);
  const handlePasswordRepeatHidden = () => dispatch(TOGGLES_ACTIONS.setPasswordRepeatHidden());

  const open = useSelector(TOGGLES_SELECTORS.getAddNewUserToggle)
  const close = () => dispatch(TOGGLES_ACTIONS.setAddNewUserDialog())

  return (
    <Dialog open={open}>
      <Formik
        initialValues={initialValues}
        // validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <DialogTitle sx={{ padding: "12px 16px" }}>
            Yeni İstifadəçi
          </DialogTitle>

          <DialogContent dividers sx={{ padding: "16px !important" }}>
            <Box>
              <Grid container spacing={2}>

                <Grid item xs={12} sm={6}>
                  <Field
                    fullWidth
                    as={MuiTextField}
                    label="Əməkdaş*"
                    name="fullName"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Field
                    fullWidth
                    as={MuiTextField}
                    label="İstifadəçi adı*"
                    name="username"
                  />
                </Grid>

                <Grid item xs={12} sm={12}>
                  <Field
                    fullWidth
                    name="position"
                    component={Autocomplete}
                    label="position"
                    options={positions}
                    filterSelectedOptions
                    getOptionLabel={option => option}
                    multiple
                    renderInput={(params) => {
                      return <MuiTextField {...params} label="Rollar" />;
                    }}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <Field fullWidth
                    type={passwordHidden ? 'password' : 'text'}
                    as={MuiTextField}
                    label="Şifrə*"
                    name="password"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handlePasswordHidden}
                            edge="end"
                          >
                            {passwordHidden ? <Visibility /> : <VisibilityOff />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <Field fullWidth
                    type={passwordRepeatHidden ? 'password' : 'text'}
                    as={MuiTextField}
                    label="Şifrənin təkrarı*"
                    name="passwordRepeat"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handlePasswordRepeatHidden}
                            edge="end"
                          >
                            {passwordRepeatHidden ? <Visibility /> : <VisibilityOff />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
              </Grid>
            </Box>
          </DialogContent>

          <DialogActions sx={{ padding: "12px 16px" }}>
            <CloseButton onClick={close} />
            <SubmitButton text="Yarat" />
          </DialogActions>
        </Form>

      </Formik>
    </Dialog>
  );
};

export default AddNewUserDialog;
