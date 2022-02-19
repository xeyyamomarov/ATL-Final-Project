import VisibilityIcon from '@mui/icons-material/Visibility';
import CreateIcon from '@mui/icons-material/Create';
import { makeStyles } from '@mui/styles';
import { Tooltip } from '@mui/material';
import {useNavigate} from "react-router-dom"
import { DeleteModify } from 'pages/NotificationsPage/components/DeleteModify';


const useStyles = makeStyles({
  icon:{
    fontWeight:"normal",
    fontSize:18,
    cursor:"pointer",
    marginLeft:5,
    position:"relative",
    left:"30px",
  }
})

export const NotificationsPageTableHeader = () => {
  const classes = useStyles()

  const editNavigate = useNavigate()
  const viewNavigate = useNavigate()

  const editHandleClick = ()=> editNavigate("/notificationEdit")

  const viewHandleClick= () => viewNavigate("/notificationView")


 

    return [
      {
        key: "bname",
        label: "Adı",
       
      },
      {
        key: "describe",
        label: "Təsviri"
      },
      {
        key: "creater",
        label: "Əlavə edən şəxs"
      },
      {
        key: "date",
          label: "Əlavə edilmə tarixi"
        },
        {
          key:"",
          label:"",
          render:()=>{

            return(
              <>
              <Tooltip title="Elanın təsviri">
                  <VisibilityIcon onClick={viewHandleClick} className={classes.icon}/>
                  </Tooltip>
                  <Tooltip title="Redaktə et">
                  <CreateIcon onClick={editHandleClick} className={classes.icon}/>
                  </Tooltip>
                    <DeleteModify/>
              </>
            )
          }
        }
    ]

}