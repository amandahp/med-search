import React from 'react'

import InputBase from '@material-ui/core/InputBase'
import IconButton from '@material-ui/core/IconButton'
import SearchIcon from '@material-ui/icons/Search'

import { useStyles } from './input-search.styled'

export const InputSearch = ({
  handleChange,
  handleClick,
  inputValue,
  inputPlaceHolder = 'Busque por uma empresa',
  className = ''
}) => {
  const classes = useStyles()

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className={`${classes.root} ${className}`}
    >
      <InputBase
        className={classes.input}
        placeholder={inputPlaceHolder}
        onChange={(event) => handleChange(event.target.value)}
        value={inputValue}
      />
      <IconButton
        type="button"
        className={classes.iconButton}
        onClick={() => handleClick()}
      >
        <SearchIcon />
      </IconButton>
    </form>
  )
}
