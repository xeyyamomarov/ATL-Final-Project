import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "#fff", color: '#424242', height: 56, justifyContent:'center', boxShadow:'none', borderBottom:'1px solid #E0E0E0' }}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Box >
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
          </Box>
          <Box sx={{ display: 'flex', alignItems:'center' }} >
            <IconButton sx={{ p: 0, marginRight: 1 }}>
              <Avatar alt="Avatar" src="" sx={{ width: 32, height: 32 }}/>
            </IconButton>
            <Typography component="div" sx={{ fontSize: 14 }}>
              Aydin Abbasov
            </Typography>
          </Box>

        </Toolbar>
      </AppBar>
    </Box>
  );
}
