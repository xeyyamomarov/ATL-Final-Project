import {
  Box, FormControl, FormControlLabel, FormLabel, Grid, MenuItem,
  Radio,
  RadioGroup,
  TextField as MuiTextField,
  Typography
} from "@mui/material";
import { SubmitButton } from "components/Buttons";
import { QueryTabs } from "containers/components/QueryTabs";
import { Breadcrumbs } from "components/Breadcrumbs";
import { FormHead } from "containers/components";
import { Field, Form, Formik } from "formik";
import { Autocomplete, TextField } from "formik-mui";
import { LocalizationProvider } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { DatePicker } from "formik-mui-lab";
import { useDispatch } from "react-redux";
import { TOGGLES_ACTIONS } from "store/Toggles";
import { GuestDetailsModal } from "./GuestDetailsModal";
import { useStyles } from "Styles/Styles";
import { InfoSection } from "containers/components/InfoSection";
import AccordionForm from "containers/components/AccordionForm/AccordionForm";
import { useState } from "react";
import { useEffect } from "react";

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

// const initialValues = {
//   visitors: [],
//   carPlate: [],
//   visitDate: "",
//   visitPurpose: "",
//   note: "",
//   result: ""
// }

const onSubmit = (values, { resetForm }) => {
  // console.log(values);
  let formData = {};
  let guests = [];
  for (const key in values) {
    if ((typeof values[key]) === "object") {
      let guest = {
        id: key,
        ...values[key],
      }
      guests.push(guest);
    } else {
      formData = { ...formData, [key]: values[key] }
    }
  }
  formData = { ...formData, guests };
  console.log(formData)

  resetForm()
}

// Dummy Data, remove after be linked
let guests = [{ id: "hbsdfg-34-76346hbu-874hdhb", name: "Orxan Axnazarov" },
{ id: "hbsdsd-78-76346hbu-874hdhb", name: "Ilqar Abbasov" },
{ id: "hbsdfh-34-768736hbu-874hdhb", name: "Zümrüd Hüseynova" }]
// 

export const GuestFormNBMWorkerEdit = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const toggle = () => dispatch(TOGGLES_ACTIONS.setDetailsDialog())
  const [initValues, setInitValues] = useState({
    visitors: [],
    carPlate: [],
    visitDate: "",
    visitPurpose: "",
    note: "",
    result: ""
  })

  useEffect(() => {
    guests.map(guest => {

      return setInitValues(old => ({
        ...old,
        [guest.id]: {
          "isStatic": "",
          "visitDate": "",
          "leaveDate": "",
          "note": "",
        }
      }))
    })
  }, [])

  return (
    <Box>
      <Formik
        initialValues={initValues}
        enableReinitialize={true}
        onSubmit={onSubmit}
      >
        <Form>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Box className={classes.breadcrumbBar}>
              <Breadcrumbs />
            </Box>
            <QueryTabs tabs={tabs} value="four" />
            <Box className={classes.container}>
              <Box className={classes.dataContainer}>
                <InfoSection name="Lamiə Səyidova Əliağa" />
                <Box className={classes.formBox}>
                  <FormHead header="NBM əməkdaşın göndərməsi" />
                  <Grid container spacing={2} padding="16px">

                    <Grid item sm={12}>
                      <Field
                        disabled
                        multiple
                        freeSolo
                        name="visitors"
                        component={Autocomplete}
                        filterSelectedOptions
                        options={[]}
                        renderInput={(params) => {
                          return <MuiTextField
                            {...params}
                            label="Gələcək şəxs"
                          />;
                        }}
                      />
                    </Grid>

                    <Grid item sm={12}>
                      <Field
                        disabled
                        multiple
                        freeSolo
                        name="carPlate"
                        component={Autocomplete}
                        filterSelectedOptions
                        options={[]}
                        renderInput={(params) => {
                          return <MuiTextField
                            {...params}
                            label="Nəqliyyat ilə bağlı qeyd"
                          />;
                        }}
                      />
                    </Grid>

                    <Grid item sm={12}>
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
                          name="visitDate"
                          fullWidth
                          component={DatePicker}
                          label="Gəlmə tarixi"
                          inputFormat="dd/MM/yyyy"
                          InputAdornmentProps={{ position: "start" }}
                        />
                      </FormControl>
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
                        disabled
                        fullWidth
                        name="visitPurpose"
                        component={TextField}
                        label="Gəlmə səbəbi"
                      />
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
                        disabled
                        fullWidth
                        name="note"
                        component={TextField}
                        label="Sorğu ilə bağlı qeyd"
                      />
                    </Grid>

                    <Grid item sm={12}>
                      <Box>
                        <Typography
                          sx={{
                            marginBottom: "16px",
                            fontWeight: 500,
                            fontSize: "18px"
                          }}
                        >
                          Qonaqlar
                        </Typography>

                        <Box
                          sx={{
                            border: "1px solid #E0E0E0",
                            borderRadius: "4px"
                          }}
                        >
                          {
                            guests.map(guest => {
                              return (
                                <AccordionForm key={guest.id} header={guest.name}>
                                  <Grid container spacing={2}>

                                    <Grid item xs={12}>
                                      <FormLabel id="isStatic">Status</FormLabel>
                                      <Field as={RadioGroup}
                                        row
                                        name={`${guest.id}.isStatic`}
                                      >
                                        <FormControlLabel value="Gəldi" control={<Radio />} label="Gəldi" />
                                        <FormControlLabel value="Gəlmədi" control={<Radio />} label="Gəlmədi" />
                                        <FormControlLabel value="Buraxılmadı" control={<Radio />} label="Buraxılmadı" />
                                      </Field>
                                    </Grid>

                                    <Grid item sm={6}>
                                      <LocalizationProvider dateAdapter={AdapterDateFns}>
                                        <Field
                                          name={`${guest.id}.visitDate`}
                                          fullWidth
                                          component={DatePicker}
                                          label="Gəlmə tarixi"
                                          inputFormat="dd/MM/yyyy"
                                          InputAdornmentProps={{ position: "start" }}
                                        />
                                      </LocalizationProvider>
                                    </Grid>

                                    <Grid item sm={6}>
                                      <LocalizationProvider dateAdapter={AdapterDateFns}>
                                        <Field
                                          name={`${guest.id}.leaveDate`}
                                          fullWidth
                                          component={DatePicker}
                                          label="Getmə tarixi"
                                          inputFormat="dd/MM/yyyy"
                                          InputAdornmentProps={{ position: "start" }}
                                        />
                                      </LocalizationProvider>
                                    </Grid>

                                    <Grid item sm={12}>
                                      <Field
                                        fullWidth
                                        name={`${guest.id}.note`}
                                        component={TextField}
                                        label="Qeyd"
                                      />
                                    </Grid>
                                  </Grid>
                                </AccordionForm>
                              )
                            })
                          }
                        </Box>

                      </Box>
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
          </LocalizationProvider>
        </Form>
      </Formik>
    </Box >
  );
};