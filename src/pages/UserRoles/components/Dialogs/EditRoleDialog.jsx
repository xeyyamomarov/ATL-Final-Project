import {
  DialogContent,
  DialogTitle,
  Dialog,
  DialogActions,
  Box,
  Grid,
  TextField as MuiTextField,
  RadioGroup,
  Radio,
  FormLabel,
  FormControlLabel
} from "@mui/material";
import { SubmitButton, CloseButton } from "components/Buttons";
import { Formik, Form, Field } from "formik";
import { Autocomplete } from 'formik-mui';
import { useSelector, useDispatch } from 'react-redux';
import { TOGGLES_SELECTORS, TOGGLES_ACTIONS } from "store/Toggles";
import { makeStyles } from "@mui/styles";

const useStyle = makeStyles({
  dialogTitle: {
    padding: "16px 20px",
    fontWeight: 400,
  },
  dialogContent: {
    padding: "16px",
  },
  
})

const positions = [
  "User",
  "Reporter",
  "Admin",
  "Manager",
];

const initialValues = {
  isStatic: "",
  name: "",
  power: "",
  authority: [],
  description: ""
}

const onSubmit = (values, { resetForm }) => {
  console.log(values);
  resetForm()
}

export const EditRoleDialog = () => {
  const classes = useStyle();

  const dispatch = useDispatch();

  const open = useSelector(TOGGLES_SELECTORS.getEditDialogToggle)
  const close = () => dispatch(TOGGLES_ACTIONS.setEditDialog())

  return (
    <Dialog open={open} onClose={close}>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
      >
        <Form>
          <DialogTitle className={classes.dialogTitle}>
            Rolun redaktəsi
          </DialogTitle>

          <DialogContent dividers className={classes.dialogContent}>
            <Box>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                <FormLabel id="isStatic">Rol statikdir?</FormLabel>
                  <Field as={RadioGroup}
                    row
                    name="isStatic"
                  >
                    <FormControlLabel value="Hə" control={<Radio />} label="Hə" />
                    <FormControlLabel value="Yox" control={<Radio />} label="Yox" />
                  </Field>
                </Grid>

                <Grid item xs={12}>
                  <Field
                    fullWidth
                    as={MuiTextField}
                    label="Adı"
                    name="name"
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

          <DialogActions className={classes.dialogTitle}>
            <CloseButton onClick={close} />
            <SubmitButton text="Yadda saxla" />
          </DialogActions>
        </Form>

      </Formik>
    </Dialog>
  );
};