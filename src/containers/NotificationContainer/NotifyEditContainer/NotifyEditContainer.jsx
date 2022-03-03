import { Divider, MenuItem, TextField as MuiTextField ,Card,CardContent,Typography} from "@mui/material";
import { Formik, Form, Field } from "formik";
import { TextField } from 'formik-mui'
import { Box } from "@mui/system";
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  container: {
    borderRadius: '4px',
    border:"none"
  },
  upBox: {
    padding: "16px",
  },
  btnBox: {
    display: "flex",
    justifyContent: "flex-end",
    padding: "12px 16px"
  },
  header: {
    fontSize: "14px",
    color: "#9B5AE1",
    backgroundColor: "#F5F5F5",
    height: "48px",
    marginBottom: "10px",
    padding: "16px",
    fontWeight: "bold",
  },
 
})

const operation = [
  { value: "Paylaş", label: "Paylaş" },
];

const initialValues = {
  name: "",
  description: "",
  operation: "",
}

const onSubmit = (values, { resetForm }) => {
  resetForm()
}

export const NotifyEditContainer = () => {
  const classes = useStyles();


  return (
    <Box className={classes.container}>
      <Card sx={{boxShadow:"none"}}>
      <Typography className={classes.header}>
            Elanın formalaşdırılması
          </Typography>
          <Card sx={{width:"90%", margin:"auto"}}>
          <Card sx={{ backgroundColor: "#F5F5F5", boxShadow: "none" }}>
        <CardContent
          sx={{
            display: "flex",
            justifyContent: "space-between",
            padding: 0,
            height: "60px",
          }}
        >
          <Typography color="#424242" padding="16px" fontSize="16px"
          >
            Elanın formalaşdırılması
          </Typography>
        </CardContent>
      </Card>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
      >
        <Form>
          <Box className={classes.upBox}>
                <Field sx={{marginBottom:"8px"}}
                  fullWidth
                  disabled
                  as={MuiTextField}
                  label="Ad "
                  name="name"
                />
                <Field sx={{marginBottom:"8px"}}
                  fullWidth
                  disabled
                  as={MuiTextField}
                  label="Təsviri"
                  name="description"
                />
                <Field 
                  fullWidth
                  disabled
                  name="operation"
                  select
                  component={TextField}
                  label="Əməliyyatlar"
                >
                  {operation.map(option => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Field>
          </Box>
          <Divider />
         
        </Form>
      </Formik>
    </Card>
    </Card>
   </Box>
  );
};