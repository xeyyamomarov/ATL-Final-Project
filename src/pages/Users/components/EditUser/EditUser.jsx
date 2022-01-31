import IconButton from '@mui/material/IconButton';
import { Edit } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { TOGGLES_ACTIONS } from 'store/Toggles';


export default function EditUser({ fontSize='small' }) {
  const dispatch = useDispatch();

  const handleClick = () => dispatch(TOGGLES_ACTIONS.setEditUserDialog());

  return (
    <div>
      <IconButton
        onClick={handleClick}
      >
        <Edit fontSize={fontSize}/>
      </IconButton>
    </div>
  );
}