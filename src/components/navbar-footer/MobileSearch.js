import React, { useState, useContext } from "react"
import { Link, navigate } from "gatsby"
import { makeStyles } from "@material-ui/core/styles"
import SearchIcon from "@material-ui/icons/Search"
import { Popover, IconButton, InputBase } from "@material-ui/core"

import { StoreContext } from "../../context/context"

const useStyles = makeStyles(theme => ({
  typography: {
    padding: theme.spacing(2),
  },
  searchBtn: {
    color: "white",
    marginRight: -10,
    marginTop: 4,
  },
  searchIcon: {
    fontWeight: "bold",
  },
  popover: {
    width: "100%",
  },
}))

const MobileSearch = () => {
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = useState(null)

  const { input, search } = useContext(StoreContext)

  const [inputValue, setInputValue] = input
  const [searchValue, setSearchValue] = search

  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleSearchChange = event => {
    setInputValue(event.target.value)
  }

  const getAppBarSearch = () => {
    setSearchValue(input)
  }

  const handleEnter = event => {
    navigate("/results")
    getAppBarSearch()
    event.preventDefault()
  }

  const open = Boolean(anchorEl)
  const id = open ? "simple-popover" : undefined

  return (
    <div>
      <SearchIcon className={classes.searchBtn} onClick={handleClick} />
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        anchorPosition={{ left: 0, top: 0 }}
        className={classes.popover}
      >
        <form onSubmit={handleEnter}>
          <Link to="/results">
            <IconButton
              onClick={() => {
                getAppBarSearch()
              }}
            >
              <SearchIcon />
            </IconButton>
          </Link>
          <InputBase autoFocus onChange={handleSearchChange} />
        </form>
      </Popover>
    </div>
  )
}

export default MobileSearch
