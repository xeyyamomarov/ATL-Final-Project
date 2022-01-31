import {
  DialogContent,
  DialogTitle,
  Dialog,
  DialogActions,
  Grid,
  TextField as MuiTextField,
} from "@mui/material";
import { SubmitButton, CloseButton } from "../Buttons";
import { Formik, Form, Field } from "formik";
import { Autocomplete } from 'formik-mui'
import { useSelector, useDispatch } from 'react-redux';
// import * as Yup from "yup";
import { TOGGLES_ACTIONS, TOGGLES_SELECTORS } from "store/Toggles";

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
}

// const validationSchema = Yup.object({
//   fullName: Yup.string().required("Required!"),
//   username: Yup.string().required("Required!"),
//   positions: Yup.string().required("Required!"),
//   password: Yup.string().required("Required!"),
//   passwordRepeat: Yup.string().required("Required!"),
// });

const onSubmit = (values, { resetForm }) => {
  console.log(values);
  resetForm()
}

const EditUserDialog = () => {

  const dispatch = useDispatch();
  const open = useSelector(TOGGLES_SELECTORS.getEditUserDialogToggle)
  const handleClose = () => dispatch(TOGGLES_ACTIONS.setEditUserDialog())

  return (
    <Dialog open={open}>
      <Formik
        initialValues={initialValues}
        // validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <DialogTitle sx={{ padding: '12px 16px' }}>
            İstifadəçinin redaktəsi
          </DialogTitle>

          <DialogContent dividers sx={{ padding: '16px !important' }}>

            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Field
                  fullWidth
                  as={MuiTextField}
                  label="Əməkdaş*"
                  name="fullName"
                  disabled
                  sx={{
                    minWidth: "263px",
                    "& .MuiOutlinedInput-root": {
                      "& > fieldset": {
                        border: "2px dotted"
                      }
                    }
                  }}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <Field
                  fullWidth
                  as={MuiTextField}
                  label="İstifadəçi adı*"
                  name="username"
                  sx={{
                    minWidth: "263px",
                  }}
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

            </Grid>
          </DialogContent>

          <DialogActions sx={{ padding: '12px 16px' }}>
            <CloseButton onClick={handleClose} />
            <SubmitButton text="Yadda saxla" />
          </DialogActions>
        </Form>
      </Formik>
    </Dialog>
  );
}

export default EditUserDialog;