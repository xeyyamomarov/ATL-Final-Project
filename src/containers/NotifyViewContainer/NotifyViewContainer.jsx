import { Divider, TextField as MuiTextField ,Card,CardContent,Typography, Tooltip} from "@mui/material";
import { Formik, Form, Field } from "formik";
import { Box } from "@mui/system";
import { makeStyles } from '@mui/styles';
import EditIcon from '@mui/icons-material/Edit';

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


const initialValues = {
  name: "",
  description: "",
  operation: "",
}

const onSubmit = (values, { resetForm }) => {
  resetForm()
}

export const NotifyViewContainer = () => {
  const classes = useStyles();


  return (
    <Box className={classes.container}>
      <Card sx={{boxShadow:"none"}}>
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
            Elanın təsviri
          </Typography>
          <Typography
            fontSize="28px"
            position="relative"
            top="12px"
            right="15px"
            gutterBottom
          >
            <Tooltip title="Redaktə">
            <EditIcon sx={{cursor:"pointer"}}/>
            </Tooltip>
          </Typography>
        </CardContent>
      </Card>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
      >
        <Form>
          <Box className={classes.upBox}>
                <Field 
                  fullWidth
                  as={MuiTextField}
                  label="Adı "
                  name="name"
                />
                <Field 
                  fullWidth
                  as={MuiTextField}
                  label="Təsviri"
                  name="description"
                />
          </Box>
          <Divider />
         
        </Form>
      </Formik>
    </Card>
    </Card>
   </Box>
  );
};