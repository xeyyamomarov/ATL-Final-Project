import { IconButton, Menu, MenuItem, Tooltip } from '@mui/material';
import { useState } from 'react';
import { MoreHoriz } from '@mui/icons-material';
import { TOGGLES_ACTIONS } from "store/Toggles";
import { useDispatch } from 'react-redux';


export default function MoreOptions() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const dispatch = useDispatch();

  const handleClick = e => setAnchorEl(e.currentTarget);
  const handleClose = () => setAnchorEl(null);
  const handleOpenClick = () => dispatch(TOGGLES_ACTIONS.setPasswordUpdateDialog())

  return (
    <div>
      <Tooltip title="Daha çox">
        <IconButton onClick={handleClick}>
          <MoreHoriz />
        </IconButton>
      </Tooltip>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={() => console.log('User Deactivated')}>Deaktivləşdirin</MenuItem>
        <MenuItem onClick={handleOpenClick}>Şifrəni yenilə</MenuItem>
      </Menu>
    </div>
  );
}