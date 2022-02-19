import { Divider, MenuItem, TextField as MuiTextField ,Card,CardContent,Typography} from "@mui/material";
import { Formik, Form, Field } from "formik";
import { TextField } from 'formik-mui'
import { Box } from "@mui/system";
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  container: {
    borderRadius: '4px',
    marginTop: "16px",
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
  header:{
    variant:"h6",
    fontSize:"15px",
    color:"#9B5AE1",
    backgroundColor:"#F5F5F5",
    height:"40px",
    marginBottom:"10px",
    display:"flex",
    alignItems:"center",
    padding:"10px",
    fontWeight:"bold"

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
          <Typography
            variant="h6"
            position="relative"
            top="15px"
            left="15px"
            color="black"
            gutterBottom
          >
            Son sorğular
          </Typography>
          <Typography
            fontSize="28px"
            position="relative"
            top="12px"
            right="15px"
            gutterBottom
          >
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
                  as={MuiTextField}
                  label="Ad "
                  name="name"
                />
                <Field sx={{marginBottom:"8px"}}
                  fullWidth
                  as={MuiTextField}
                  label="Təsviri"
                  name="description"
                />
                <Field 
                  fullWidth
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