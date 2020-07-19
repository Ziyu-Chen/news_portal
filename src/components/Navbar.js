import React from "react";
import { AppBar, Toolbar, Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
// import About from "./About"

const categories = ["Tech", "Business", "Science", "Culture", "Ideas"];

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  title: {
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  },
  signin: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    borderRadius: theme.shape.borderRadius,
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto"
    }
  },
  link: {
    textDecoration: "none"
  }
}));

function Navbar() {
  const classes = useStyles();
  return (
    <div id="Navbar">
      <AppBar className={classes.root}>
        <Toolbar>
          <Link className={classes.link} to="/">
            <Button>
              <Typography className={classes.title}>ChinaV</Typography>
            </Button>
          </Link>
          {categories.map(category => (
            <Button>
              <Typography>{category}</Typography>
            </Button>
          ))}
          <Link className={classes.link} to="/about">
            <Button>About</Button>
          </Link>
          <Button className={classes.signin}>Sign in / Sign up</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
