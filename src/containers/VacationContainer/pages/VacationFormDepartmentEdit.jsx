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
import { useStyles } from "../../Styles/Styles";
import { InputFile } from "containers/components/InputFile";
import { InfoIcon } from "containers/components/InfoIcon/InfoIcon";
import { DownloadIcon } from "containers/components/DownloadIcon/DownloadIcon";
import { InfoSection } from "containers/components/InfoSection";

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

export const VacationFormDepartmentEdit = () => {
  const classes = useStyles();

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
          <QueryTabs tabs={tabs} value="two" />
          <Box className={classes.container}>
            <Box className={classes.dataContainer}>
              <InfoSection name="Lamiə Səyidova Əliağa" />
              <Box className={classes.formBox}>
                <FormHead
                  header="Departament rəhbərin göndərməsi"
                  actions={
                    <>
                      <InfoIcon />
                      <DownloadIcon />
                    </>
                  }

                />
                <Grid container spacing={2} padding="16px">

                  <LocalizationProvider dateAdapter={AdapterDateFns}>
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
                    <InputFile disabled/>
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
                <SubmitButton text="Yadda saxla və yönləndir" />
              </Box>

            </Box>
          </Box>
        </Form>
      </Formik>
    </Box >
  );
};