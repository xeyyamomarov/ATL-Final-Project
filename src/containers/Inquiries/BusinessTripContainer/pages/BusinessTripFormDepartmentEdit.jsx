import { Box, FormControl, Grid, MenuItem } from "@mui/material";
import { SubmitButton } from "components/Buttons";
import { QueryTabs } from "containers/components/QueryTabs";
import { Breadcrumbs } from "components/Breadcrumbs";
import { FormHead } from "containers/components";
import { Field, Form, Formik } from "formik";
import { TextField } from "formik-mui";
import { LocalizationProvider } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { DatePicker } from "formik-mui-lab";
import { useStyles } from "styles/Styles";
import { InputFile } from "containers/components/InputFile";
import { InfoSection } from "containers/components/InfoSection";
import { InfoIcon } from "containers/components/InfoIcon";

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
  startDate: new Date(),
  endDate: new Date(),
  type: "",
  result: "",
}

const onSubmit = (values, { resetForm }) => {
  console.log(values);
  resetForm()
}

export const BusinessTripFormDepartmentEdit = () => {
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
                <FormHead header="Departament rəhbərin göndərməsi"
                  actions={
                    <>
                      <InfoIcon />
                    </>
                  }
                />
                <Grid container spacing={2} padding="16px">

                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <Grid item xs={12} md={6}>
                      <FormControl fullWidth
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            "& > fieldset": {
                              border: "2px dotted"
                            }
                          }
                        }}
                      >
                        <Field
                          disabled
                          name="startDate"
                          component={DatePicker}
                          label="Başlama tarixi"
                          inputFormat="dd/MM/yyyy"
                          InputAdornmentProps={{ position: "start" }}
                        />
                      </FormControl>
                    </Grid>

                    <Grid item xs={12} md={6}>
                      <FormControl fullWidth
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            "& > fieldset": {
                              border: "2px dotted"
                            }
                          }
                        }}
                      >
                        <Field
                          disabled
                          name="endDate"
                          component={DatePicker}
                          label="Bitmə tarixi"
                          inputFormat="dd/MM/yyyy"
                          InputAdornmentProps={{ position: "start" }}
                        />
                      </FormControl>
                    </Grid>
                  </LocalizationProvider>

                  <Grid item xs={12}>
                    <InputFile disabled />
                  </Grid>

                  <Grid item xs={12}>
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

                  <Grid item xs={12}>
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