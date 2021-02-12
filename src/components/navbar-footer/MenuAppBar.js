import React from "react"
import { Link, navigate } from "gatsby"
import { makeStyles, useTheme, fade } from "@material-ui/core/styles"
import {
  Button,
  Badge,
  Grid,
  Menu,
  MenuItem,
  IconButton,
  Typography,
  Toolbar,
  AppBar,
} from "@material-ui/core"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import MenuIcon from "@material-ui/icons/Menu"
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart"

import MobileSearch from "./MobileSearch"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginBottom: 39,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    marginLeft: -100,
  },
  titleMob: {
    width: "50%",
  },
  btns: {
    margin: "5px",
    fontWeight: "bold",
  },
  cartBtn: {
    color: "white",
    textDecoration: "none",
  },
  link: {
    color: "inherit",
    textDecoration: "none",
    "&.active": {
      borderBottom: "3px solid #fff",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchBtn: {
    color: "white",
    marginRight: -10,
    marginTop: 4,
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 1),
    // vertical padding + font size from searchIcon
    //paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    width: "100%",
  },
  cartLink: {
    color: "inherit",
    textDecoration: "none",
    borderRadius: 30,
    "&.active": {
      border: "2px solid white",
    },
  },
  menuIcon: {
    marginLeft: -10,
  },
  menuItem: {
    fontWeight: "bold",
    marginTop: -10,
    padding: 20,
  },
}))

const MenuAppBar = ({ handleSearchChange, getAppBarSearch, numOfItems }) => {
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"))

  const handleMenu = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleEnter = event => {
    navigate("/results")
    getAppBarSearch()
    event.preventDefault()
  }

  return (
    <div className={classes.root}>
      <AppBar color="primary">
        <Toolbar>
          {isMobile ? (
            <Grid justify="space-between" container direction="row">
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
                className={classes.menuIcon}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={open}
                onClose={handleClose}
              >
                <Link className={classes.link} to="/mens">
                  <MenuItem className={classes.menuItem} onClick={handleClose}>
                    MEN'S
                  </MenuItem>
                </Link>
                <Link className={classes.link} to="/womens">
                  <MenuItem className={classes.menuItem} onClick={handleClose}>
                    WOMEN'S
                  </MenuItem>
                </Link>
              </Menu>
              <Typography variant="h4" className={classes.titleMob}>
                <Link className={classes.link} to="/">
                  LOGO
                </Link>
              </Typography>
            </Grid>
          ) : (
            // mobile end ------------------------------
            <Grid container direction="row">
              <Grid
                item
                container
                direction="row"
                justify="center"
                sm={12}
                style={{ marginLeft: 115 }}
              >
                <Link className={classes.link} to="/mens">
                  <Button
                    className={classes.btns}
                    variant="contained"
                    color="primary"
                  >
                    Men's
                  </Button>
                </Link>
                <Typography variant="h4" style={{ fontWeight: "bold" }}>
                  <Link className={classes.link} to="/">
                    LOGO
                  </Link>
                </Typography>
                <Link className={classes.link} to="/womens">
                  <Button
                    className={classes.btns}
                    variant="contained"
                    color="primary"
                  >
                    Women's
                  </Button>
                </Link>
              </Grid>
            </Grid>
          )}

          <IconButton>
            <MobileSearch
              handleSearchChange={handleSearchChange}
              getAppBarSearch={getAppBarSearch}
              handleEnter={handleEnter}
            />
          </IconButton>
          <Link to="/cart" className={classes.cartLink}>
            <IconButton aria-label="shopping cart">
              <Badge
                badgeContent={numOfItems}
                color="secondary"
                className={classes.badge}
              >
                <ShoppingCartIcon className={classes.cartBtn} />
              </Badge>
            </IconButton>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default MenuAppBar
