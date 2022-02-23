import {CardContent,Typography,Tooltip,Box } from "@mui/material";
import SettingsIcon from '@mui/icons-material/Settings';
import { makeStyles } from "@mui/styles";
import SecurityIcon from '@mui/icons-material/Security';
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles({
    content:{
        cursor:"pointer",
        "&:hover":{
            background:"#F3EBFB",
        }

    },
    box:{
      height:"400px",
      width:"300px",
      borderRight:"1px solid gray",
    },
    icon:{
        position:'relative',
        top:"5px",
        },
      typography:{
          color:"black",
          "&:hover":{
              color:"#9B5AE1"
          }

        }
})

export const ProfileSettings = () => {
const classes = useStyles()

const userNavigate = useNavigate()
const securityNavigate = useNavigate()


const userHandleClick = ()=> userNavigate("/user-settings")

const securityHandleClick = () => securityNavigate("/profile-security")

  return (
    <Box  className={classes.box}>
      <CardContent onClick={userHandleClick}
      className={classes.content}
      >
        <Typography className={classes.typography}
          variant="h6"
        >
            <Tooltip title="Hesab parametrləri" >
          <SettingsIcon className={classes.icon}/>
          </Tooltip>
           Hesab parametrləri
        </Typography>
      </CardContent>
      <CardContent
      onClick={securityHandleClick}
       className={classes.content}
      >
        <Typography
        className={classes.typography}
          variant="h6"
        >
            <Tooltip title="Təhlükəsizlik və Giriş" >
           < SecurityIcon className={classes.icon}/>
          </Tooltip>
           Təhlükəsizlik və Giriş
        </Typography>
      </CardContent>
    </Box>
  );
};
