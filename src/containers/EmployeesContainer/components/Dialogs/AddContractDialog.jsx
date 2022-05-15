import { Field, Formik, Form } from "formik";
import { 
  DialogContent, 
  DialogTitle, 
  Dialog, 
  DialogActions, 
  Box, 
  Grid, 
  TextField as MuiTextField,
  FormControl, 
  RadioGroup,
  Radio,
  FormLabel,
  FormControlLabel 
} from "@mui/material";
import { Autocomplete } from 'formik-mui'
import { SubmitButton, CloseButton } from 'components/Buttons';
import { LocalizationProvider } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { DatePicker } from "formik-mui-lab";
import * as Yup from "yup";
import { TextFieldWrapper } from "./TextFieldWrapper";


const initialValues = {
  date: "",
  type: "",
  number: "",
  bookNo: "",
  duration: ""
}
const type = ['Əmək']

const validationSchema = Yup.object({
  date: Yup.string().required("Mütləq doldurulmalıdır!"),
  type: Yup.string().required("Mütləq doldurulmalıdır!"),
  number: Yup.string().required("Mütləq doldurulmalıdır!"),
  bookNo: Yup.string().required("Mütləq doldurulmalıdır!"),
  duration: Yup.string().required("Mütləq doldurulmalıdır!")
});

export const AddContractDialog = ({add, setAdd}) => {

  const handleClose = () => setAdd(false)
  const onSubmit = (values, { resetForm }) => {
    resetForm();
    handleClose();
  }

  return (
    <Dialog open={add} onClose={handleClose}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <DialogTitle sx={{ padding: "16px" }}>
          Yeni müqavilə
          </DialogTitle>
          <DialogContent dividers sx={{ padding: "16px" }}>
            <Box>
              <Grid container spacing={2}>
              <Grid item sm={12}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <FormControl fullWidth>
                    <Field
                      name="date"
                      component={DatePicker}
                      label="Tarixi*"
                      inputFormat="dd/MM/yyyy"
                      InputAdornmentProps={{ position: "start" }}
                    />
                  </FormControl>
                </LocalizationProvider>
              </Grid>
              <Grid item xs={12} sm={6}>
                  <Field
                    fullWidth
                    name="type"
                    component={Autocomplete}
                    label="type"
                    options={type}
                    filterSelectedOptions
                    getOptionLabel={option => option}
                    renderInput={(params) => {
                      return <MuiTextField {...params} label="Növü*" />;
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextFieldWrapper
                    label="Nömrəsi*"
                    name="number"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextFieldWrapper
                    label="Əmək kitabçasının nömrəsi*"
                    name="bookNo"
                  />
                </Grid>
                <Grid item sm={12} md={6}>
                <FormLabel id="duration">Müddəti*</FormLabel>
                <Field
                  fullWidth
                  name="duration"
                  as={RadioGroup}
                  row
                >
                  <FormControlLabel value="Müddətli" control={<Radio />} label="Müddətli" sx={{ color: '#666666' }} />
                  <FormControlLabel value="Müddətsiz" control={<Radio />} label="Müddətsiz" sx={{ color: '#666666' }} />
                </Field>
              </Grid>
              </Grid>
            </Box>
          </DialogContent>
          <DialogActions sx={{ padding: "16px" }}>
            <CloseButton onClick={handleClose} />
            <SubmitButton text="Yarat" />
          </DialogActions>
        </Form>
      </Formik>
    </Dialog>
  );
};