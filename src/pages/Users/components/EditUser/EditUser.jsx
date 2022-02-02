import { IconButton, Tooltip } from '@mui/material';
import { Edit } from '@mui/icons-material';
import { useDispatch,
  // useSelector
} from 'react-redux';
import { TOGGLES_ACTIONS } from 'store/Toggles';
// import { USERS_SELECTORS } from 'store/Users';


export function EditUser({ fontSize = 'small', userId }) {
  const dispatch = useDispatch();
  // const { users } = useSelector(USERS_SELECTORS.getUsers)
  // const user = users.filter(user => user.id = userId)

  // console.log(userId)

  const handleClick = () => {
    dispatch(TOGGLES_ACTIONS.setEditUserDialog());
    // console.log(user);
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
}