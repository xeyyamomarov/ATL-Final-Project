import { Divider, Grid, MenuItem, TextField as MuiTextField } from "@mui/material";
import { Formik, Form, Field } from "formik";
import { TextField } from 'formik-mui'
import { useDispatch } from 'react-redux';
import { TOGGLES_ACTIONS } from "store/Toggles";
import { Box } from "@mui/system";
import { makeStyles } from '@mui/styles';
import { DatePicker } from "formik-mui-lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import {
  LocalizationProvider,
  // DatePicker 
} from "@mui/lab";
import { SubmitButton } from "components/Buttons";
import DateInput from "pages/InquiriesPage/components/DateInput";
import { useState } from "react";



const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: "column",
    border: '1px solid #E0E0E0',
    borderRadius: '4px',
    marginBottom: "16px"
  },
  upBox: {
    padding: "16px"
  },
  btnBox: {
    display: "flex",
    justifyContent: "flex-end",
    padding: "12px 16px"
  },
})

const dayOffTypes = [
  { value: "Tam", label: "Tam gün" },
  { value: "Yarım", label: "Yarım gün" },
  { value: "2 saat", label: "2 saat" }
]

const resultDatas = [
  { value: "DepartmentHead", label: "Departament rəhbərin göndərməsi" },
  { value: "HR", label: "HR göndərməsi" },
  { value: "Confirmed", label: "Təsdiqləndi" }
]

const tabs = [
  { value: "one", label: "Sorğunun formalaşdırılması" },
  { value: "two", label: "Departament rəhbərin göndərməsi" },
  { value: "three", label: "HR göndərməsi" },
]

const initialValues = {
  date: "",
  type: "",
  result: ""
}

const onSubmit = (values, { resetForm }) => {
  console.log(values);
  resetForm()
}

export const Testquery = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const classes = useStyles();
  const dispatch = useDispatch();
  const close = () => dispatch(TOGGLES_ACTIONS.setSearchForm())

  return (
    <Box className={classes.container}>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
      >
        <Form>
          <Box className={classes.upBox}>
            <Grid container spacing={2}>

              <Grid item sm={12}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  {/* <Field
                    component={DatePicker}
                    label="Day Off tarixi"
                    name="date"
                    inputFormat="dd/MM/yyyy"
                    InputAdornmentProps={{ position: "start" }}
                  /> */}
                  <Field
                    name="date"
                    component={DatePicker}
                    label="Day Off tarixi"
                    // renderInput={props => {
                    //   return <MuiTextField fullWidth {...props} />
                    // }}
                    inputFormat="dd/MM/yyyy"
                    InputAdornmentProps={{ position: "start" }}
                  />
                </LocalizationProvider>
              </Grid>

              <Grid item sm={12}>
                <Field
                  fullWidth
                  name="type"
                  select
                  component={TextField}
                  label="Növü"
                >
                  {dayOffTypes.map(option => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Field>
              </Grid>

              <Grid item sm={12}>
                <Field
                  fullWidth
                  name="result"
                  select
                  component={TextField}
                  label="Nəticə"
                >
                  {resultDatas.map(option => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Field>
              </Grid>
            </Grid>
          </Box>
          <Divider />
          <Box className={classes.btnBox}>
            <SubmitButton text="Yadda saxla və yönləndir" />
          </Box>
        </Form>
      </Formik>
    </Box>
  );
}