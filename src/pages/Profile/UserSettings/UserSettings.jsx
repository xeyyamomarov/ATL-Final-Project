import {  Card, CardContent,Grid,TextField, Typography} from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";


const useStyles = makeStyles({

    box:{

        display:"flex",
        justifyContent:"space-evenly",
        marginTop:"10px"

    },
    CardContent:{
        width:"250px",
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"center",
        border:"1px solid #BDBDBD",
    },
    form:{
        display:"flex",
        flexDirection:"column",
        padding:"5px",
        border:"1px solid #BDBDBD"
    }
})
export const UserSettings = () => {

    const classes = useStyles()
  return (

    <Box className={classes.box}>
        <Card className={classes.CardContent}>
            <AccountCircleIcon sx={{fontSize:"80px",color:"gray"}} />
            <Typography
            variant="h6"
            color="black"
          >
            Xəyalə Aslanova Əliağa
          </Typography>
          <Typography
            variant="h6"
            color="#BDBDBD"
          >
           Aparıcı
          </Typography>


        </Card>
  <Card  className={classes.form}>
      <CardContent>
          <Grid container spacing={2}>
              <Grid xs={12} item>
                  <TextField label="İstifadəçi adı" variant="standard" fullWidth />
              </Grid>
              <Grid xs={12} item>
                  <TextField label="Elektron poçt" variant="standard" fullWidth />
              </Grid>
              <Grid xs={12} item>
                  <TextField label="Əlaqə nömrəsi" variant="standard" fullWidth />
              </Grid>
              <Grid xs={12} item>
                  <TextField id="outlined-number" label="İstifadəçi rolları" type="number" variant="standard" fullWidth />
              </Grid>

          </Grid>
      </CardContent>
  </Card>
  </Box>
//   </Card>
  );
};
