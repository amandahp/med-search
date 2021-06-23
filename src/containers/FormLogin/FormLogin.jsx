import React from 'react'
import { Controller, useForm } from 'react-hook-form'

import { Box, TextField, Button } from '@material-ui/core'

import { useStyles } from './form-login.styles'

export const FormLogin = () => {
  const classes = useStyles()

  const { control, handleSubmit } = useForm()

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <Box className={classes.container} mx="auto">
      <form className={classes.Modal} onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="email"
          control={control}
          render={({ field: { onChange, value } }) => (
            <TextField
              className={classes.email}
              variant="outlined"
              fullWidth
              id="email"
              name="email"
              label="Email"
              value={value}
              onChange={onChange}
            />
          )}
        />

        <Controller
          name="password"
          control={control}
          render={({ field: { onChange, value } }) => (
            <TextField
              variant="outlined"
              fullWidth
              id="password"
              name="password"
              label="Senha"
              value={value}
              onChange={onChange}
            />
          )}
        />

        <Box flexDirection="row" justifyContent="flex-end">
          <Button className={classes.button} variant="contained" type="submit">
            Entrar
          </Button>
        </Box>
      </form>
    </Box>
  )
}
