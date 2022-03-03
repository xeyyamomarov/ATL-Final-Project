import { Breadcrumbs as MuiBreadcrumbs, MenuItem, Typography } from '@mui/material';
import { useStyles } from 'components/Breadcrumbs/BreadcrumbsStyle';
import { useLocation, useNavigate } from "react-router-dom";
import { breadcrumbTranslations, inquiries, settings, inquiriesTranslated, settingsTranslated, notificationsTranslated } from 'constants';
import { KeyboardArrowDown } from '@mui/icons-material';
import { DropdownButton } from './Dropdown/DropdownButton';


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

    inquiries.forEach(item => {
      if (arr[0] === item) {
        return array.unshift("Sorğular")
      }
    })
    settings.forEach(item => {
      if (arr[0] === item) {
        return array.unshift("Parametrlər")
      }
    })

    if (arr[0] === "notification") {
      array.unshift("Elanlar")
    }

    return array;
  }

  const translatedPathNames = breadcrumbTranslation(pathnames)

  return (
    <MuiBreadcrumbs aria-label="breadcrumb" className={classes.breadcrumbs}>

      {pathname === "/" ? (<Typography className={classes.text}> Əsas səhifə </Typography>) :

        translatedPathNames.map((name, index) => {
          if (name === "Sorğular" || name === "Parametrlər" || name === "Elanlar") {
            return (
              <DropdownButton
                text={name}
                key={index}
                className={classes.links}
                endIcon={<KeyboardArrowDown />}
              >
                {name === "Sorğular" ?
                  inquiriesTranslated.map(menu => {
                    return <MenuItem key={menu.name} onClick={() => navigate(menu.link)}>{menu.name}</MenuItem>
                  }) : name === "Parametrlər" ?
                    settingsTranslated.map(menu => {
                      return <MenuItem key={menu.name} onClick={() => navigate(menu.link)}>{menu.name}</MenuItem>
                    }) : name === "Elanlar" ?
                      notificationsTranslated.map(menu => {
                        return <MenuItem key={menu.name} onClick={() => navigate(menu.link)}>{menu.name}</MenuItem>
                      }) : null
                }
              </DropdownButton>
            )
          }
          else {
            return <Typography key={index} className={classes.text}> {name} </Typography>
          }
        })}

    </MuiBreadcrumbs>
  )
};