import { Breadcrumbs as ABreadcrumbs, Link } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  searchBar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: "1px solid #E0E0E0",
    padding: "12px 16px",
    marginBottom: "16px",
  },
  breadcrumbs: {
    fontSize: "14px",
    fontWeight: 500,
    textDecoration: 'none',
  },
})

function Breadcrumbs() {
  const classes = useStyles();
  function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
  }

  const breadcrumbs = [
    <Link key="1" className={classes.breadcrumbs}
      color="text.primary"
      href="#"
      onClick={handleClick}>
      Parametrlər
    </Link>,
    <Link key="2" color="text.primary" className={classes.breadcrumbs}>
      İstifadəçilər
    </Link>,
  ];

  return (
    <ABreadcrumbs separator="›" aria-label="breadcrumb">
      {breadcrumbs}
    </ABreadcrumbs>
  )
}

export default Breadcrumbs;
