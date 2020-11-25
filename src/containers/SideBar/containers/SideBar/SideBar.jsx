import React, { useState } from "react";
import useStyles from "./styles";
import { privateRouter } from "../../../../router";
import { useDispatch } from "react-redux";
import { push } from "connected-react-router";
import classnames from "classnames";
import {
  Drawer,
  IconButton,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
} from "@material-ui/core";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";

import { SideBarItem } from "../../components/SideBarItem";

export default ({ open, setOpen }) => {
  const [openListItem, setOpenListItem] = useState(false);
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleClick = (label) => {
    setOpenListItem(openListItem === label ? false : label);
  };

  const renderListItems = (parentRoutePath, route) => {
    const { children, icon, path, label } = route;

    const fullPath = parentRoutePath ? `${parentRoutePath}${path}` : path;

    return (
      <>
        <ListItem
          dense={Boolean(parentRoutePath)}
          key={fullPath}
          onClick={() => dispatch(push(fullPath))}
          button
          divider
          className={classnames(classes.nav, {
            [classes.childNav]: parentRoutePath,
          })}
          onClick={() => handleClick(label)}
        >
          {parentRoutePath ? null : <ListItemIcon>{icon}</ListItemIcon>}
          <ListItemText primary={label} />
        </ListItem>
      </>
    );

    /* if (!children.length) {
      return (
        <>
          <ListItem
            dense={Boolean(parentRoutePath)}
            key={fullPath}
            onClick={() => dispatch(push(fullPath))}
            button
            divider
            className={classnames(classes.nav, {
              [classes.childNav]: parentRoutePath,
            })}
            onClick={() => handleClick(label)}
          >
            {parentRoutePath ? null : <ListItemIcon>{icon}</ListItemIcon>}
            <ListItemText primary={label} />
          </ListItem>
        </>
      );
    } else {
      return (
        <React.Fragment key={fullPath}>
          <ListItem
            dense={Boolean(parentRoutePath)}
            key={fullPath}
            onClick={() => dispatch(push(fullPath))}
            button
            divider
            className={classnames(classes.nav, {
              [classes.childNav]: parentRoutePath,
            })}
          >
            {parentRoutePath ? null : <ListItemIcon>{icon}</ListItemIcon>}
            <ListItemText primary={label} />
            {openListItem === label ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={openListItem === label} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {children.map((childRoute) => renderListItems(path, childRoute))}
            </List>
          </Collapse>
        </React.Fragment>
      );
    }*/
  };
  /*return (
    <aside className="sidebar">
      {privateRouter().map((route) => (
        <SideBarItem key={route.path} route={route} />
      ))}
    </aside>
  );*/
  return (
    <Drawer
      variant="permanent"
      classes={{
        papper: classnames(
          classes.drawerPapper,
          !open && classes.drawerPapperClose
        ),
      }}
      open={open}
    >
      <div className={classes.toolbarIcon}>
        <IconButton size="small" onClick={() => setOpen(false)}>
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <Divider />
      <List
        className={classes.nestedListSubheader}
        component="nav"
        arrealableledby="nested-list-subheader"
      >
        {privateRouter().map((route) => (
          <React.Fragment key={Math.random()}>
            {renderListItems(null, route)}
          </React.Fragment>
        ))}
      </List>
    </Drawer>
  );
};
