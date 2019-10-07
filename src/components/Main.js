import React, { Component } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import withStyles from "@material-ui/styles/withStyles";
import { withRouter } from "react-router-dom";
import Topbar from "./Topbar";

const styles = theme => ({});

class Main extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
        <Topbar />
      </React.Fragment>
    );
  }
}

export default withRouter(withStyles(styles)(Main));
