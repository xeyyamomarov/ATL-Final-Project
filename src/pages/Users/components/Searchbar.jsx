import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { Button, Box } from '@mui/material';
import { Add, Search } from '@mui/icons-material';

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function SearchBar({ clickState }) {
  const breadcrumbs = [
    <Link key="1"
      underline='none'
      color="text.primary"
      href="#"
      onClick={handleClick}>
      Parametrlər
    </Link>,
    <Typography key="2" color="text.primary">
      İstifadəçilər
    </Typography>,
  ];

  return (
    <Box component="div" sx={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      border: "1px solid #E0E0E0",
      padding: "12px 16px"
    }} >
      <Breadcrumbs separator="›" aria-label="breadcrumb">
        {breadcrumbs}
      </Breadcrumbs>
      <Box component="div" textAlign="right">
        <Button
        variant='text'
        color='inherit' 
        startIcon={<Search />}
        onClick={() => clickState.setClick(prev => !prev)}
        >Axtarış</Button>
        <Button variant='contained' color='primary' disableElevation sx={{
          marginLeft: '12px'
        }} startIcon={<Add />}>Əlavə et</Button>
      </Box>
    </Box >
  );
}