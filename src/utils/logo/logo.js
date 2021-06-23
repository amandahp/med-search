import React from 'react'

import { useStyles } from './logo.styles'

import logo from './usuario-de-perfil (1).png'

export const Logo = () => {
  const classes = useStyles()
  return <img className={classes.logo} src={logo}></img>
}
