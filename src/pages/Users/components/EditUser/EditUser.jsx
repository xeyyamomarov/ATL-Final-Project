import { IconButton, Tooltip } from '@mui/material';
import { Edit } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { TOGGLES_ACTIONS } from 'store/Toggles';


export function EditUser({ fontSize = 'small', userId }) {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(TOGGLES_ACTIONS.setEditDialog());
  };

  return (
    <div>
      <Tooltip title="Redaktə et">
        <IconButton
          onClick={handleClick}
        >
          <Edit fontSize={fontSize} />
        </IconButton>
      </Tooltip>
    </div>
  );
};