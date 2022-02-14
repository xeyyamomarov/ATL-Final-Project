import { IconButton, Menu, Tooltip } from '@mui/material';
import { useState } from 'react';
import { MoreHoriz } from '@mui/icons-material';


export const MoreOptions = ({ tooltip="Daha çox", children}) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = e => setAnchorEl(e.currentTarget);
  const handleClose = () => setAnchorEl(null);

  return (
    <div>
      <Tooltip title={tooltip}>
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
        {children}
      </Menu>
    </div>
  );
};