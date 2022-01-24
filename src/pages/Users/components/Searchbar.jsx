import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { Box } from '@mui/system';
import { Button } from '@mui/material';
import { Add, Search } from '@material-ui/icons';

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function SearchBar() {
  const breadcrumbs = [

    <Link key="1" underline='none' color="text.primary" href="/getting-started/installation/" onClick={handleClick}>
      Parametrlər
    </Link>,
    <Typography key="2" color="text.primary">
      İstifadəçilər
    </Typography>,
  ];

  return (
    <Box>
      <Breadcrumbs separator="›" aria-label="breadcrumb">
        {breadcrumbs}
      </Breadcrumbs>
      <Button variant='text' >Axtarış</Button>
      <Button variant='contained'>Əlavə et</Button>
    </Box>
  );
}