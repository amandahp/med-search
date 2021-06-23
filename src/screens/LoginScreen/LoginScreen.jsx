import React from 'react'

import { FormProvider } from 'react-hook-form'

import { Typography, Box } from '@material-ui/core'

import { useStyles } from './login-screen.styled'
import { FormLogin } from '../../containers/FormLogin'
import { Header } from '../../containers/Header'

export const LoginScreen = () => {
  const classes = useStyles()

  return (
    <>
      <Header header={true} />
      <Box className={classes.container}>
        <Box className={classes.containerResponsive}>
          <Typography variant="h3" align="center">
            Faça seu Login
          </Typography>
        </Box>

        <FormProvider>
          <div className={classes.form}>
            <FormLogin />
          </div>
        </FormProvider>
      </Box>
    </>
  )
}
