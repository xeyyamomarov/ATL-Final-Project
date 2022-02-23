import {  TextField as MuiTextField ,Card,CardContent,Typography, Tooltip,Divider} from "@mui/material";
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
      <Box sx={{display:"flex", flexDirection:"column",padding:"10px"}}>
      <MuiTextField 
       id="standard-basic"
       label="Adı"
       variant="standard"
      >
          
          </MuiTextField>
          <MuiTextField
          id="standard-basic"
          label="Təsviri"
          variant="standard"
          multiline
          rows={4}
          >
          
          </MuiTextField>
          </Box>
          <Divider/>
    </Card>
    </Card>
   </Box>
  );
};