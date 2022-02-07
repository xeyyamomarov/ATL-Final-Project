import { ReactComponent as Logo } from "assets/logo/logo.svg";
import { NavLink } from "react-router-dom";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import sideBarMenuİtems from "./sideBarMenuİtems";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { Collapse } from '@mui/material';
import { useState } from "react";
import { useStyles} from './Styles';


const SideBar = ({ open }) => {
  const classes = useStyles();
  const [collapse, setCollapse] = useState({});
  const collapseHandler = (item) => item.items?.length > 0 && setCollapse(old => ({ ...old, [item.key]: !old[item.key] }));
  return (
    <Box className={classes.sidebarContainer}>
      <Collapse orientation="horizontal" in={open} collapsedSize={70}>
      <Toolbar className={classes.logoWrapper}>
        {open && <Logo />}
      </Toolbar>
      <List>
        {sideBarMenuİtems.map((item, index) => {
          return (
            <Box key={index}>
              <ListItem className={classes.navLink} onClick={() => collapseHandler(item)} button key={item.key} component={item.path && NavLink} to={item.path} >
                <ListItemIcon className={classes.navLinkIcon}>{item.icon}</ListItemIcon>
                {open && <ListItemText className={classes.navLinkText} primary={item.label}/>}
                {open && (item.items?.length > 0 && (collapse[item.key] ? <ExpandLessIcon className={classes.arrow} /> : <ExpandMoreIcon className={classes.arrow} />))}
              </ListItem>
              {
                open && item.items?.length > 0 && (
                  <Collapse in={collapse[item.key]} key={`${item.key}-collapse`}>
                    <List key={`${item.key}-sub-list`}>
                      {
                        item.items.map(subItem => (
                          <ListItem  className={classes.navLink} button key={subItem.key} component={NavLink} to={subItem.path} > 
                            <ListItemIcon className={classes.navLinkIcon}>{subItem.icon}</ListItemIcon>
                            {open && <ListItemText primary={subItem.label} className={classes.navLinkText} />}
                          </ListItem>
                        ))
                      }
                    </List>
                  </Collapse>
                )
              }
            </Box>
          )
        }
        )}
      </List>
      </Collapse>
    </Box>
  );
};

export default SideBar;

