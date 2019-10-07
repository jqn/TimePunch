import React, { Component } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import withStyles from "@material-ui/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { withRouter } from "react-router-dom";
import Topbar from "./Topbar";

import Clock from "react-live-clock";

const moment = require("moment");

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.grey["100"],
    overflow: "hidden",
    // background: `url(${backgroundShape}) no-repeat`,
    backgroundSize: "cover",
    backgroundPosition: "0 400px",
    paddingBottom: 200,
  },
  grid: {
    width: 1200,
    marginTop: 40,
    [theme.breakpoints.down("sm")]: {
      width: "calc(100% - 20px)",
    },
  },
  paper: {
    padding: theme.spacing(3),
    textAlign: "left",
    color: theme.palette.text.secondary,
  },
  rangeLabel: {
    display: "flex",
    justifyContent: "space-between",
    paddingTop: theme.spacing(2),
  },
  topBar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 32,
  },
  outlinedButtom: {
    textTransform: "uppercase",
    margin: theme.spacing(1),
  },
  actionButtom: {
    textTransform: "uppercase",
    margin: theme.spacing(1),
    width: 152,
  },
  blockCenter: {
    padding: theme.spacing(2),
    textAlign: "center",
  },
  block: {
    padding: theme.spacing(2),
  },
  box: {
    marginBottom: 40,
    height: 65,
  },
  inlining: {
    display: "inline-block",
    marginRight: 10,
  },
  buttonBar: {
    display: "flex",
  },
  alignRight: {
    display: "flex",
    justifyContent: "flex-end",
  },
  noBorder: {
    borderBottomStyle: "hidden",
  },
  loadingState: {
    opacity: 0.05,
  },
  loadingMessage: {
    position: "absolute",
    top: "40%",
    left: "40%",
  },
});

class Main extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <CssBaseline />
        <Topbar />
        <div className={classes.root}>
          <Grid container justify="center">
            <Grid
              spacing={4}
              alignItems="center"
              justify="center"
              container
              className={classes.grid}
            >
              <Grid item xs={12} md={4}>
                <Paper className={classes.paper}>
                  <div className={classes.box}>
                    <Typography variant="body2" gutterBottom>
                      {moment().format("MMMM DD YYYY")}
                    </Typography>
                    <Clock
                      format={"HH:mm:ss a"}
                      ticking={true}
                      timezone={"US/Pacific"}
                    />
                  </div>
                  <div style={{ display: "flex", justifyContent: "flex-end" }}>
                    <ButtonGroup
                      size="small"
                      aria-label="small outlined button group"
                    >
                      <Button color="secondary">Clock In</Button>
                      <Button color="secondary">Clock out</Button>
                    </ButtonGroup>
                  </div>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(withStyles(styles)(Main));
