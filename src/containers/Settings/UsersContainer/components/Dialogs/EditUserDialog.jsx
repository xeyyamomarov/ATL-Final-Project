import {
  DialogContent,
  DialogTitle,
  Dialog,
  DialogActions,
  Grid,
  TextField as MuiTextField,
} from "@mui/material";
import { SubmitButton, CloseButton } from "components/Buttons";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Autocomplete } from 'formik-mui'
import { useSelector, useDispatch } from 'react-redux';
import * as Yup from "yup";
import { TOGGLES_ACTIONS, TOGGLES_SELECTORS } from "store/Toggles";
import { TextFieldWrapper } from "./TextFieldWrapper";

const positions = [
  "User",
  "Reporter",
  "Admin",
  "Manager",
];

const initialValues = {
  username: "",
  position: [],
}

const validationSchema = Yup.object({
  username: Yup.string().required("Mütləq doldurulmalıdır!"),
  position: Yup.array().required("Mütləq doldurulmalıdır!")
});

const onSubmit = (values, { resetForm }) => {
  console.log(values);
  resetForm()
}

export const EditUserDialog = () => {

  const dispatch = useDispatch();
  const open = useSelector(TOGGLES_SELECTORS.getEditDialogToggle)
  const handleClose = () => dispatch(TOGGLES_ACTIONS.setEditDialog())

  return (
    <Dialog open={open} onClose={handleClose}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
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
                  value="Aslanova Xəyalə Rüfət"
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
                <TextFieldWrapper
                  label="İstifadəçi adı*"
                  name="username"
                  sx={{
                    minWidth: "263px",
                  }}
                />
              </Grid>

              <Grid item xs={12}>
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
                    return (<>
                      <MuiTextField {...params} label="Rollar*" />
                    </>
                    );
                  }}
                />
                  <ErrorMessage name="position" />
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
};