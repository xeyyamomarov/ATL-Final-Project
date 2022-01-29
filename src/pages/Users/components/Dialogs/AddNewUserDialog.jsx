import { DialogContent, DialogTitle, Dialog, DialogActions, Box, Grid, TextField as MuiTextField } from "@mui/material";
import { SubmitButton, CloseButton } from '../Buttons'
import { Formik, Form, Field } from 'formik';
import { Autocomplete, TextField } from 'formik-mui';

const positions = [
  { title: "User", id: 1 }, { title: "Reporter", id : 2 }, { name: "Admin", id: 3 },{title: "Manager", id: 4}]

const AddNewUserDialog = (props) => {

  const { open, close } = props;

  // const handleCreate = () => console.log(name, username, position, password, passwordRepeat)
  const handleClose = () => close(prev => !prev);


  return (

    <Dialog open={open}>

      <Formik
        initialValues={{
          fullName: '',
          username: '',
          position: [],
          password: '',
          passwordRepeat: '',
        }}
        validate={(values) => {

        }}
        onSubmit={(values, { resetForm }) => {
          console.log(values)
          resetForm()
        }}
      >
        {({ submitForm }) => (
          <Form>

            <DialogTitle sx={{ padding: '12px 16px' }}>
              Yeni İstifadəçi
            </DialogTitle>

            <DialogContent dividers sx={{ padding: '16px !important' }}>

              <Box>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <Field
                      component={MuiTextField}
                      label="Əməkdaş*"
                      name='fullName'
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Field
                      component={MuiTextField}
                      label="İstifadəçi adı*"
                      name='username'
                    />
                  </Grid>

                  <Grid item xs={12} sm={12}>

                    <Field
                      name="position"
                      component={Autocomplete}
                      options={positions}
                      getOptionLabel={option => { console.log(option); return "" } }
                      style={{ width: 300 }}
                      filterSelectedOptions
                      renderInput={(params) => {
                        (
                          <MuiTextField
                            {...params}
                            label="Rollar"
                          />
                        )
                      }}
                    />

                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <Field component={MuiTextField}
                      label="Şifrə*"
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <Field component={MuiTextField}
                      label="Şifrənin təkrarı*"
                    />
                  </Grid>

                </Grid>
              </Box>
            </DialogContent>

            <DialogActions sx={{ padding: '12px 16px' }}>
              <CloseButton onClick={handleClose} />
              <SubmitButton text="Yarat" onClick={submitForm} />
            </DialogActions>

          </Form>
        )}
      </Formik>
    </Dialog>
  );
}

export default AddNewUserDialog;