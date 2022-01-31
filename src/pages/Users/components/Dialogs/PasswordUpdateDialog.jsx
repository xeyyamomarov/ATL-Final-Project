import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Formik, Form, Field } from "formik";
import { DialogContent, DialogTitle, IconButton, Dialog, DialogActions, TextField as MuiTextField, Box, Grid, InputAdornment } from "@mui/material";
import { SubmitButton, CloseButton } from '../Buttons';
import { useSelector, useDispatch } from 'react-redux';
import { TOGGLES_SELECTORS, TOGGLES_ACTIONS } from "store/Toggles";


const initialValues = {
  password: "",
  passwordRepeat: "",
}

const onSubmit = (values, { resetForm }) => {
  console.log(values);
  resetForm()
}

// const validationSchema = Yup.object({
//   password: Yup.string().required("Required!"),
//   passwordRepeat: Yup.string().required("Required!"),
// });

const PasswordUpdateDialog = () => {
  const dispatch = useDispatch();
  const passwordHidden = useSelector(TOGGLES_SELECTORS.getPasswordHidden);
  const handlePasswordHidden = () => dispatch(TOGGLES_ACTIONS.setPasswordHidden());
  const passwordRepeatHidden = useSelector(TOGGLES_SELECTORS.getPasswordRepeatHidden);
  const handlePasswordRepeatHidden = () => dispatch(TOGGLES_ACTIONS.setPasswordRepeatHidden());

  const open = useSelector(TOGGLES_SELECTORS.getPasswordUpdateDialogToggle)
  const handleClose = () => dispatch(TOGGLES_ACTIONS.setPasswordUpdateDialog())


  return (
    <Dialog open={open}>

      <Formik
        initialValues={initialValues}
        // validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <DialogTitle sx={{ padding: "12px 16px" }}>
            Şifrənin yenilənməsi
          </DialogTitle>

          <DialogContent dividers sx={{ padding: "16px !important" }}>
            <Box>
              <Grid container spacing={2}>
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
            <CloseButton onClick={handleClose} />
            <SubmitButton text="Yenilə" />
          </DialogActions>
        </Form>

      </Formik>

    </Dialog>
  );
}

export default PasswordUpdateDialog;