import { Box,CardContent ,Typography,Tooltip} from "@mui/material"
import EditIcon from '@mui/icons-material/Edit';
import KeyIcon from '@mui/icons-material/Key';
import { makeStyles } from "@mui/styles";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles({
    box:{
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center",
        border:"1px solid #BDBDBD",
        margin:"10px",
        height:"60px"

    },
    typography:{
        fontSize:"12px",
        position:"relative",
        left:"25px"
    },
    icon:{
        position:"relative",
        top:"5px",
        cursor:"pointer"
    }

})
export const ProfileSecurity =()=>{

    const passNavigate = useNavigate()

    const passHandleClick = ()=> passNavigate("/change-password")

    const classes = useStyles()
    return(
        <Box className={classes.box}>
            <CardContent sx={{display:"flex"}}
      >
          <Box>
        <Typography 
          variant="h6"
        >
      <KeyIcon className={classes.icon}/>
          Şifrəni dəyişdir
        </Typography>
        <Typography className={classes.typography}>
            Başqa bir yerdə istifadə etmədiyin güclü bir şifrədən istifadə etməyin yaxşı fikirdir.
        </Typography>
        </Box>
      </CardContent>
      <CardContent>
      <Tooltip title="Şifrəni dəyişdir">
      <EditIcon onClick={passHandleClick} className={classes.icon}/>
      </Tooltip>
      </CardContent>
        </Box>
    )
}