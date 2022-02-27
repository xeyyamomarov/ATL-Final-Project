import {
  Box, Grid, MenuItem,
  // TextField as MuiTextField
} from "@mui/material";
import { SubmitButton } from "components/Buttons";
import { QueryTabs } from "containers/components/QueryTabs";
import { Breadcrumbs } from "components/Breadcrumbs";
import { FormHead } from "containers/components";
import { Field, Form, Formik } from "formik";
import { TextField } from "formik-mui";
import {
  LocalizationProvider,
  // DatePicker as MuiDatePicker
} from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { DatePicker } from "formik-mui-lab";
import { useDispatch } from "react-redux";
import { TOGGLES_ACTIONS } from "store/Toggles";
import { BusinessTripDetailsModal } from "./BusinessTripDetailsModal";
import { useStyles } from "../../Styles/Styles";
import { InputFile } from "containers/components/InputFile/InputFile";
import { InfoSection } from "containers/components/InfoSection";
import { InfoIcon } from "containers/components/InfoIcon/InfoIcon";

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
  result: "",
}

const onSubmit = (values, { resetForm }) => {
  console.log(values);
  resetForm()
}

export const BusinessTripFormHrEdit = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const toggle = () => dispatch(TOGGLES_ACTIONS.setDetailsDialog())

  return (
    <Box>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
      >
        <Form>
          <Box className={classes.breadcrumbBar}>
            <Breadcrumbs />
          </Box>
          <QueryTabs tabs={tabs} value="three" />
          <Box className={classes.container}>
            <Box className={classes.dataContainer}>
              <InfoSection name="Lamiə Səyidova Əliağa" />
              <Box className={classes.formBox}>
                <FormHead header="HR göndərməsı"
                  actions={
                    <>
                      <InfoIcon />
                    </>
                  }
                />
                <Grid container spacing={2} padding="16px">

                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <Grid item sm={6}>
                      {/* <Field
                        fullWidth
                        component={DatePicker}
                        label="Day Off tarixi"
                        name="date"
                        inputFormat="dd/MM/yyyy"
                        InputAdornmentProps={{ position: "start" }}
                      /> */}

                      {/* <Field
                        name="date"
                        component={DatePicker}
                        label="Day Off tarixi"
                        renderInput={props => {
                          return <MuiTextField fullWidth {...props} />
                        }}
                        inputFormat="dd/MM/yyyy"
                        InputAdornmentProps={{ position: "start" }}
                      /> */}

                      <Field
                        disabled
                        sx={{
                          width: "100%",
                          "& .MuiOutlinedInput-root": {
                            "& > fieldset": {
                              border: "2px dotted"
                            }
                          }
                        }}
                        name="start"
                        fullWidth
                        component={DatePicker}
                        label="Başlama tarixi"
                        inputFormat="dd/MM/yyyy"
                        InputAdornmentProps={{ position: "start" }}
                      />

                    </Grid>

                    <Grid item sm={6}>
                      <Field
                        disabled
                        sx={{
                          width: "100%",
                          "& .MuiOutlinedInput-root": {
                            "& > fieldset": {
                              border: "2px dotted"
                            }
                          }
                        }}
                        name="start"
                        fullWidth
                        component={DatePicker}
                        label="Başlama tarixi"
                        inputFormat="dd/MM/yyyy"
                        InputAdornmentProps={{ position: "start" }}
                      />
                    </Grid>
                  </LocalizationProvider>

                  <Grid item sm={12}>
                    <InputFile />
                  </Grid>

                  <Grid item sm={12}>
                    <Field
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          "& > fieldset": {
                            border: "2px dotted"
                          }
                        }
                      }}
                      fullWidth
                      disabled
                      name="note"
                      select
                      component={TextField}
                      label="Qeyd"
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

              <Box className={classes.button}>
                <SubmitButton onClick={toggle} text="Yadda saxla və bitir" />
              </Box>
              <BusinessTripDetailsModal />
            </Box>
          </Box>
        </Form>
      </Formik>
    </Box >
  );
};