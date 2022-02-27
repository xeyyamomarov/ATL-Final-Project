import {
  Autocomplete,
  Box, Grid, MenuItem,
  TextField as MuiTextField
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
import { GuestDetailsModal } from "./GuestDetailsModal";
import { useStyles } from "../../Styles/Styles";
import { InfoSection } from "containers/components/InfoSection";

const resultDatas = [
  { value: "DepartmentHead", label: "Departament rəhbərin göndərməsi" },
  { value: "NBM rəisin", label: "NBM rəisin göndərməsi" },
  { value: "Confirmed", label: "Təsdiqləndi" }
]

const tabs = [
  { value: "one", label: "Sorğunun formalaşdırılması" },
  { value: "two", label: "Departament rəhbərin göndərməsi" },
  { value: "three", label: "NBM rəisin göndərməsi" },
  { value: "four", label: "NBM əməkdaşın göndərməsi" },
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

export const GuestFormNBMChiefEdit = () => {
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
                <FormHead header="NBM rəisin göndərməsi" />
                <Grid container spacing={2} padding="16px">

                  <Grid item sm={12}>
                    <Field
                      disabled
                      fullWidth
                      multiple
                      component={Autocomplete}
                      name="visitors"
                      options={[]}
                      freeSolo
                      // onChange={(e, value) => setReceivers((state) => value)}

                      renderInput={params => {
                        return <MuiTextField
                          {...params}
                          label="Gələcək şəxs"
                        // placeholder="Gələcək şəxs"
                        />
                      }}
                    />
                  </Grid>

                  <Grid item sm={12}>
                    <Field
                      disabled
                      fullWidth
                      multiple
                      name="carPlate"
                      component={Autocomplete}
                      options={[]}
                      freeSolo
                      // onChange={(e, value) => setReceivers((state) => value)}

                      renderInput={params => {
                        return <MuiTextField
                          {...params}
                          label="Nəqliyyat ilə bağlı qeyd"
                        // placeholder="Gələcək şəxs"
                        />
                      }}
                    />
                  </Grid>

                  <Grid item sm={6}>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                      <Field
                        disabled
                        name="date"
                        fullWidth
                        component={DatePicker}
                        label="Gəlmə tarixi"
                        inputFormat="dd/MM/yyyy"
                        InputAdornmentProps={{ position: "start" }}
                      />
                    </LocalizationProvider>
                  </Grid>

                  <Grid item sm={6}>
                    <Field
                      disabled
                      fullWidth
                      name="meetingPerson"
                      component={TextField}
                      label="Görüşəcək şəxs"
                    />
                  </Grid>

                  <Grid item sm={12}>
                    <Field
                      disabled
                      fullWidth
                      name="visitPurpose"
                      component={TextField}
                      label="Gəlmə səbəbi"
                    />
                  </Grid>

                  <Grid item sm={12}>
                    <Field
                      disabled
                      fullWidth
                      name="note"
                      component={TextField}
                      label="Sorğu ilə bağlı qeyd"
                    />
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
              <GuestDetailsModal />
            </Box>
          </Box>
        </Form>
      </Formik>
    </Box >
  );
};