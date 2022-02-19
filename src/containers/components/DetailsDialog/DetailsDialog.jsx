import {
  DialogContent,
  DialogTitle,
  Dialog,
  DialogActions,
  Grid,
  TextField as MuiTextField,
} from "@mui/material";
import { SubmitButton, CloseButton } from "components/Buttons";
import { Formik, Form, Field } from "formik";
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
  fullName: "",
  username: "",
  position: [],
}

const validationSchema = Yup.object({
  fullName: Yup.string().required("Mütləq doldurulmalıdır!"),
  username: Yup.string().required("Mütləq doldurulmalıdır!"),
  position: Yup.array().required("Mütləq doldurulmalıdır!"),
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

      <DialogTitle sx={{ padding: '12px 16px' }}>
        Sorğunun detalları
      </DialogTitle>

      <DialogContent dividers sx={{ padding: '16px' }}>


      </DialogContent>

      <DialogActions sx={{ padding: '12px 16px' }}>
        <CloseButton onClick={handleClose} />
      </DialogActions>

    </Dialog>
  );
};