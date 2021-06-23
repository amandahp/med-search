import React from 'react'

import { Typography, Box } from '@material-ui/core'

import { useStyles } from './not-found-screen'

import { Header } from '../../containers/Header'

export const NotFoundScreen = () => {
  const classes = useStyles()

  return (
    <>
      <Header privateHeader={true} />
      <Box className={classes.container}>
        <Box className={classes.containerResponsive}>
          <Typography variant="h3" align="center">
            Página não existe
          </Typography>
        </Box>
      </Box>
    </>
  )
}
