import React from "react";
import Auxiliry from "../../hoc/Auxiliry";
import classes from '../Layout/Layout.module.css'
const layout = props => {
  return (
    <Auxiliry>
      <div>Toolbar, sideDrawer, Backdrop</div>
      <main className={classes.Content}>{props.children}</main>
    </Auxiliry>
  );
};

export default layout;
