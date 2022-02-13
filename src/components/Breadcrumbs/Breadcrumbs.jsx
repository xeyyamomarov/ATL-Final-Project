// import { ExpandMore } from '@mui/icons-material';
import { Breadcrumbs as MuiBreadcrumbs, Link, Typography } from '@mui/material';
import { useStyles } from 'components/Breadcrumbs/BreadcrumbsStyle';
import { useLocation, useNavigate } from "react-router-dom";
import { breadcrumbTranslations } from 'constants';

export const Breadcrumbs = props => {
  const classes = useStyles();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const pathnames = pathname.split("/").filter(x => x)

  const breadcrumbTranslation = arr => {
    const array = [];
    arr.map(item => {
      return breadcrumbTranslations.forEach(obj => {
        if (obj[item]) {
          array.push(obj[item])
        }
      })
    })
    return array;
  }

  const translatedPathNames = breadcrumbTranslation(pathnames)

  return (
    <MuiBreadcrumbs aria-label="breadcrumb" className={classes.breadcrumbs}>
      
      {pathname === "/" ? (<Typography className={classes.text}> Əsas səhifə </Typography>) :
      translatedPathNames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
        const isLast = index === translatedPathNames.length - 1;

        return isLast ? (<Typography key={index} className={classes.text}> {name} </Typography>) :
         (<Link key={index} className={classes.links} onClick={() => navigate(routeTo)}> {name} </Link>)
      })}

    </MuiBreadcrumbs>
  )
};