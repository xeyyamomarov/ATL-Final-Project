import { Button, IconButton, Menu, Tooltip } from '@mui/material';
import { useState } from 'react';
import { Avatar } from '@mui/material';


export const ProfileOptions = ({ tooltip="Daha çox", children}) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = e => setAnchorEl(e.currentTarget);
  const handleClose = () => setAnchorEl(null);

  return (
    <Button>
      <Tooltip title={tooltip}>
        <IconButton onClick={handleClick}>
          <Avatar />
        </IconButton>
      </Tooltip>
      <Menu
        id="profile-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {children}
      </Menu>
    </Button>
  );
};