import React from "react";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import PropTypes from "prop-types";
// import * as styles from "./TopBar.styles";
//import { TopBarWrapper } from "./TopBar.styles";

const TopBar = props => (
  <AppBar position="absolute" color="default">
    <Toolbar></Toolbar>
  </AppBar>
);

TopBar.propTypes = {
  // bla: PropTypes.string,
};

TopBar.defaultProps = {
  // bla: 'test',
};

export default TopBar;
