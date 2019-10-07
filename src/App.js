import React, { Component } from "react";
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import { blue, indigo } from "@material-ui/core/colors";
import Routes from "./routes";
import "typeface-roboto";
import "./styles.css";
import { hot } from "react-hot-loader";

const theme = createMuiTheme({
  palette: {
    secondary: {
      main: "#E64524",
    },
    primary: {
      main: "#ffeb3b",
    },
  },
  typography: {
    // Use the system font instead of the default Roboto font.
    fontFamily: ['"Lato"', "sans-serif"].join(","),
  },
});

class App extends Component {
  render() {
    return (
      <div className="App">
        <ThemeProvider theme={theme}>
          <Routes />
        </ThemeProvider>
      </div>
    );
  }
}

export default hot(module)(App);
