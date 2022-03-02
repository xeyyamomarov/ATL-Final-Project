import { useNavigate } from "react-router-dom";
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
import { useStyles } from "containers/Styles/Styles";
import { 
    tabs,
    times,
    departments,
    disabilities,
    duration,
    relatives,
    education,
    positions
} from '../constants';

const initialValues = {
    date: new Date(),
    type: "",
    result: "",
  };

export const NewEmployeesForm = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  // const [date, setDate] = useState("");

  const onSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
   // navigate("/employees/new/saved");
  };

  return (
    <Box>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        <Form>
          <Box className={classes.breadcrumbBar}>
            <Breadcrumbs />
          </Box>
          <QueryTabs tabs={tabs} value="one" />
          <Box className={classes.container}>
            <Box className={classes.dataContainer}>
              <Box className={classes.formBox}>
                <FormHead header="Sorğunun formalaşdırılması" />
                {/* <Grid container spacing={2} padding="16px">
                  <Grid item sm={12}>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                      <FormControl fullWidth>
                        <Field
                          name="date"
                          component={DatePicker}
                          label="Day Off tarixi"
                          inputFormat="dd/MM/yyyy"
                          InputAdornmentProps={{ position: "start" }}
                        />
                      </FormControl>
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
                      {dayOffTypes.map((option) => (
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
                      {resultDatas.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </Field>
                  </Grid>
                </Grid> */}
              </Box>

              <Box className={classes.button}>
                <SubmitButton text="Yadda saxla və yönləndir" />
              </Box>
            </Box>
          </Box>
        </Form>
      </Formik>
    </Box>
  );
};