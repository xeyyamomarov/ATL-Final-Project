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

const roles = [
  "User",
  "Reporter",
  "Admin",
  "Manager",
];

const initialValues = {
  nameSurname: "",
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
              <Grid item sm={12} md={6} lg={3}>
                <Field
                  fullWidth
                  as={MuiTextField}
                  label="Ad Soyad"
                  name="nameSurname"
                />
              </Grid>
              <Grid item sm={12} md={6} lg={3}>
                <Field
                  fullWidth
                  as={MuiTextField}
                  label="İstifadəçi adı"
                  name="username"
                />
              </Grid>
              <Grid item sm={12} md={6} lg={3}>
                <Field
                  fullWidth
                  as={MuiTextField}
                  label="Vəzifə"
                  name="position"
                />
              </Grid>
              <Grid item sm={12} md={6} lg={3}>
                <Field
                  fullWidth
                  name="roles"
                  component={Autocomplete}
                  options={roles}
                  label="roles"
                  filterSelectedOptions
                  getOptionLabel={option => option}
                  multiple
                  renderInput={(params) => {
                    return <MuiTextField {...params} label="Rollar" />;
                  }}
                />
              </Grid>
            </Grid>
          </Box>
          <Divider />
          <Box className={classes.btnBox}>
            <CloseButton type="reset" text="Təmizlə"/>
            <Button type="submit" text="Axtar" />
          </Box>
        </Form>
      </Formik>
    </Box>
  );
};