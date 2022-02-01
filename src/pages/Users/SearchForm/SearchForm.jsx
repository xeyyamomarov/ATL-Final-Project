import { Divider, Grid, TextField as MuiTextField } from "@mui/material";
import { Button, CloseButton } from "../components/Buttons";
import { Formik, Form, Field } from "formik";
import { Autocomplete } from 'formik-mui'
import { useDispatch } from 'react-redux';
import { TOGGLES_ACTIONS } from "store/Toggles";
import { Box } from "@mui/system";

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

const SearchForm = () => {

  const dispatch = useDispatch();

  const close = () => dispatch(TOGGLES_ACTIONS.setSearchForm())

  return (
    <Box
      sx={{
        marginBottom: "16px",
        display: 'flex',
        flexDirection: "column",
        border: '1px solid #E0E0E0',
        borderRadius: '4px',
      }}
    >
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
      >
        <Form>

          <Box padding="16px">
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

          <Box display="flex" justifyContent="flex-end" padding="16px">
            <CloseButton onClick={close} />
            <Button type="submit" text="Axtar" />
          </Box>
        </Form>
      </Formik>
    </Box>
  );
}

export default SearchForm;