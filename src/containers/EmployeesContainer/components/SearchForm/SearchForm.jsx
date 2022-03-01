import { Box, Divider, Grid, TextField as MuiTextField } from "@mui/material";
import { Button, CloseButton } from "components/Buttons";
import { Formik, Form, Field } from "formik";
import { Autocomplete } from 'formik-mui'
import { makeStyles } from '@mui/styles';


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

const times = [
  '09:00 - 18:00',
  '18:00 - 00:00',
  '00:00 - 09:00'
];

const departments = [
  'Rəqəmsal idarə etmə',
  'HR',
  'Təhlükəsizlik',
  'İT',
  'Satınalma'
]

const disabilities = [
  'Yoxdur',
  '1 ci dərəcəli',
  '2 ci dərəcəli',
  '3 ci dərəcəli',
  '4 ci dərəcəli'
]

const initialValues = {
  fullName: "",
  username: "",
  position: "",
  roles: [],
}

const onSubmit = (values, { resetForm }) => {
  console.log(values);
  resetForm()
}

export const SearchForm = () => {

  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
      >
        <Form>
          <Box className={classes.upBox}>
            <Grid container spacing={2}>
              <Grid item sm={12} md={6} lg={4}>
                <Field
                  fullWidth
                  as={MuiTextField}
                  label="Ad Soyad Ata"
                  name="fullName"
                />
              </Grid>
              <Grid item sm={12} md={6} lg={4}>
                <Field
                  fullWidth
                  as={MuiTextField}
                  label="departments"
                  name="departments"
                  component={Autocomplete}
                  options={departments}
                  filterSelectedOptions
                  getOptionLabel={option => option}
                  multiple
                  renderInput={(params) => {
                    return <MuiTextField {...params} label="Şöbə" />;
                  }}
                />
              </Grid>
              <Grid item sm={6} lg={2}>
                <Field
                  fullWidth
                  as={MuiTextField}
                  label="Yaş(dan)"
                  name="ageFrom"
                />
              </Grid>
              <Grid item sm={6} lg={2}>
                <Field
                  fullWidth
                  as={MuiTextField}
                  label="Yaş(a)"
                  name="ageTo"
                />
              </Grid>
              <Grid item sm={12} md={6} lg={4}>
                <Field
                  fullWidth
                  as={MuiTextField}
                  label="times"
                  name="times"
                  component={Autocomplete}
                  options={times}
                  filterSelectedOptions
                  getOptionLabel={option => option}
                  multiple
                  renderInput={(params) => {
                    return <MuiTextField {...params} label="İş vaxtı" />;
                  }}
                />
              </Grid>
              <Grid item sm={12} md={6} lg={4}>
                <Field
                  fullWidth
                  as={MuiTextField}
                  label="disabilities"
                  name="disabilities"
                  component={Autocomplete}
                  options={disabilities}
                  filterSelectedOptions
                  getOptionLabel={option => option}
                  multiple
                  renderInput={(params) => {
                    return <MuiTextField {...params} label="Əlilliyi" />;
                  }}
                />
              </Grid>
              <Grid item sm={12} md={6} lg={4}>
  
                <div role="group" aria-labelledby="my-radio-group">
                  <label>
                    <Field type="radio" name="picked" value="One" />
                    One
                  </label>
                  <label>
                    <Field type="radio" name="picked" value="Two" />
                    Two
                  </label>
                </div>
              </Grid>

            </Grid>
          </Box>
          <Divider />
          <Box className={classes.btnBox}>
            <CloseButton type="reset" text="Təmizlə" />
            <Button type="submit" text="Axtar" />
          </Box>
        </Form>
      </Formik>
    </Box>
  );
};


