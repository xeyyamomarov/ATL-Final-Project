import { IconButton, Tooltip } from '@mui/material';
import { Delete} from '@mui/icons-material';
import { useDispatch} from 'react-redux';
import { TOGGLES_ACTIONS} from 'store/Toggles';


export const DeleteModify=()=> {

    const dispatch = useDispatch()

    const handleClick=() => dispatch(TOGGLES_ACTIONS.setDeleteNotify())

  return (
    
      <Tooltip title="Sil">
        <IconButton sx={{position:"relative",
        left:"15px"}}
          onClick={handleClick}
        >
          <Delete sx={{color:"black"}}/>
        </IconButton>
      </Tooltip>
    
  );
};