import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
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
      <IconButton
        onClick={handleClick}
      >
        <MoreHoriz />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={()=>console.log('User Deactivated')}>Deaktivləşdirin</MenuItem>
        <MenuItem onClick={handleOpenClick}>Şifrəni yenilə</MenuItem>
      </Menu>
    </div>
  );
}