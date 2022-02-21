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
import { ITSupplyDetailsModal } from "./ITSupplyDetailsModal";
import { useStyles } from "containers/Styles/Styles";

const ITSupplyTypes = [
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


export const ITSupplyFormHrEdit = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  
  const toggle = () => dispatch(TOGGLES_ACTIONS.setDetailsDialog())

  const onSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
    toggle();
  }


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
              <Box className={classes.formBox}>
                <FormHead header="HR göndərməsi" />
                <Grid container spacing={2} padding="16px">

                  <Grid item sm={12}>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
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
                        name="date"
                        disabled
                        fullWidth
                        component={DatePicker}
                        label="Day Off tarixi"
                        inputFormat="dd/MM/yyyy"
                        InputAdornmentProps={{ position: "start" }}
                      />
                    </LocalizationProvider>
                  </Grid>

                  <Grid item sm={12}>
                    <Field
                      disabled
                      fullWidth
                      name="type"
                      select
                      component={TextField}
                      label="Növü"
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          "& > fieldset": {
                            border: "2px dotted"
                          }
                        }
                      }}
                    >
                      {ITSupplyTypes.map(option => (
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
                <SubmitButton text="Yadda saxla və bitir" />
              </Box>
              <ITSupplyDetailsModal />
            </Box>
          </Box>
        </Form>
      </Formik>
    </Box >
  );
};