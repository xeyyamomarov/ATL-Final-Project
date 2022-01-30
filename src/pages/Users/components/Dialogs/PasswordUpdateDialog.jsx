import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Formik, Form, Field } from "formik";
import { DialogContent, DialogTitle, IconButton, Dialog, DialogActions, TextField as MuiTextField, Box, Grid, InputAdornment } from "@mui/material";
import { useState } from "react";
import { SubmitButton, CloseButton } from '../Buttons';


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

const PasswordUpdateDialog = ({ open, close }) => {
  const [hiddenPassword, setHiddenPassword] = useState(true);
  const [hiddenPasswordRepeat, setHiddenPasswordRepeat] = useState(true);

  const handleShowPassword = () => {
    setHiddenPassword(prev => !prev);
  };
  const handleShowPasswordRepeat = () => {
    setHiddenPasswordRepeat(prev => !prev);
  };

  const handleClose = () => close((prev) => !prev);

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
                  type={hiddenPassword ? 'password' : 'text'}
                  as={MuiTextField}
                  label="Şifrə*"
                  name="password"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleShowPassword}
                          edge="end"
                        >
                          {hiddenPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <Field fullWidth
                  type={hiddenPasswordRepeat ? 'password' : 'text'}
                  as={MuiTextField}
                  label="Şifrənin təkrarı*"
                  name="passwordRepeat" 
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleShowPasswordRepeat}
                          edge="end"
                        >
                          {hiddenPasswordRepeat ? <Visibility /> : <VisibilityOff />}
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