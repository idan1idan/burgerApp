import React from "react";
import Auxiliary from "../../hoc/Auxiliry";
import classes from '../Layout/Layout.module.css'
import Toolbar from '../Navigation/Toolbar/Toolbar';
const layout = props => {
  return (
    <Auxiliary>
      <Toolbar />
      <main className={classes.Content}>{props.children}</main>
    </Auxiliary>
  );
};

export default layout;
