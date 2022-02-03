import {
  DialogContent,
  DialogTitle,
  Dialog,
  DialogActions,
  Box,
  Grid,
  TextField as MuiTextField,
} from "@mui/material";
import { SubmitButton, CloseButton } from "components/Buttons";
import { Formik, Form, Field } from "formik";
import { Autocomplete } from 'formik-mui';
import { useSelector, useDispatch } from 'react-redux';
import { TOGGLES_SELECTORS, TOGGLES_ACTIONS } from "store/Toggles";

const positions = [
  "User",
  "Reporter",
  "Admin",
  "Manager",
];

const initialValues = {
  fullName: "",
  power: "",
  authority: [],
  description: ""
}

const onSubmit = (values, { resetForm }) => {
  console.log(values);
  resetForm()
}

const NewRoleDialog = () => {

  const dispatch = useDispatch();

  const open = useSelector(TOGGLES_SELECTORS.getAddNewToggle)
  const close = () => dispatch(TOGGLES_ACTIONS.setAddNewDialog())

  return (
    <Dialog open={open}>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
      >
        <Form>
          <DialogTitle sx={{ padding: "12px 16px" }}>
            Yeni Rol
          </DialogTitle>

          <DialogContent dividers sx={{ padding: "16px !important" }}>
            <Box>
              <Grid container spacing={2}>

                <Grid item xs={12}>
                  <Field
                    fullWidth
                    as={MuiTextField}
                    label="Adı"
                    name="Name"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    fullWidth
                    as={MuiTextField}
                    label="Fərqləndirici ad"
                    name="power"
                  />
                </Grid>

                <Grid item xs={12}>
                  <Field
                    fullWidth
                    name="authority"
                    component={Autocomplete}
                    // label="position"
                    options={positions}
                    filterSelectedOptions
                    getOptionLabel={option => option}
                    multiple
                    renderInput={(params) => {
                      return <MuiTextField {...params} label="Səlahiyyətlər" />;
                    }}
                  />
                </Grid>

                <Grid item xs={12}>
                  <Field
                    fullWidth
                    as={MuiTextField}
                    label="Təsviri"
                    name="description"
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

export default NewRoleDialog;