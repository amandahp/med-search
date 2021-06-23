import React, { useCallback } from 'react'

import { Controller, useForm } from 'react-hook-form'
import { useHistory } from 'react-router'

import {
  Box,
  Grid,
  Select,
  TextField,
  Button,
  InputLabel,
  FormControl,
  MenuItem
} from '@material-ui/core'

import { useStyles } from './form.styles'

export const Form = (props) => {
  const { control, handleSubmit } = useForm()
  const sexo = ['Feminino', 'Masculino']
  const genderIdentity = ['Cisgênero', 'Transgênero', 'Não-binário']
  const { sacValues } = props
  const classes = useStyles()
  const history = useHistory()

  const onSubmit = (data) => {
    console.log(data)
  }

  const handleRedirect = useCallback(() => {
    history.push('/home')
  }, [history])

  return (
    <>
      <Box alignItems="center" marginTop="30px">
        <form className={classes.Modal} onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2}>
            <Grid item xs={12} xl={12} lg={12}>
              <Controller
                name="nome do paciente"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <TextField
                    variant="outlined"
                    fullWidth
                    id="nome do paciente"
                    name="nome do paciente"
                    label="Nome do Paciente"
                    value={value}
                    onChange={onChange}
                  />
                )}
              />
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={12} xl={12} lg={12}>
              <Controller
                name="cpf"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <TextField
                    variant="outlined"
                    fullWidth
                    id="cpf"
                    name="cpf"
                    label="CPF"
                    value={value}
                    onChange={onChange}
                  />
                )}
              />
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={12} xl={12} lg={12}>
              <Controller
                name="email"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <TextField
                    variant="outlined"
                    fullWidth
                    id="email"
                    name="email"
                    label="E-mail"
                    value={value}
                    onChange={onChange}
                  />
                )}
              />
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={12} xl={12} lg={12}>
              <Controller
                name="sexo"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <>
                    <FormControl fullWidth variant="outlined" margin="normal">
                      <InputLabel id="sexo">Sexo</InputLabel>
                      <Select
                        fullWidth
                        id="sexo"
                        name="sexo"
                        label="Sexo"
                        value={value}
                        onChange={onChange}
                      >
                        {sexo.map((option) => (
                          <MenuItem
                            id="faturamento"
                            label="faturamento"
                            key={option}
                            value={option}
                          >
                            {option}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </>
                )}
              />
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={12} xl={12} lg={12}>
              <Controller
                name="ig"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <>
                    <FormControl fullWidth variant="outlined" margin="normal">
                      <InputLabel id="gender identity">
                        Identidade de Genêro
                      </InputLabel>
                      <Select
                        fullWidth
                        id="gender identity"
                        name="gender identity"
                        label="Identidade de Genêro"
                        value={value}
                        onChange={onChange}
                      >
                        {genderIdentity.map((option) => (
                          <MenuItem
                            id="gender identity"
                            label="Identidade de Genêro"
                            key={option}
                            value={option}
                          >
                            {option}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </>
                )}
              />
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={12} xl={12} lg={12}>
              <Controller
                name="sobre"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <TextField
                    fullWidth
                    variant="outlined"
                    id="sobre"
                    name="sobre"
                    placeholder="Sobre"
                    multiline
                    rows={4}
                    value={value}
                    onChange={onChange}
                  />
                )}
              />
            </Grid>
          </Grid>
          <Box flexDirection="row" justifyContent="flex-end" padding="40px 0">
            <Button
              className={classes.cancelButton}
              color="primary"
              type="reset"
              onClick={handleRedirect}
            >
              Cancelar
            </Button>
            <Button
              className={classes.submitButton}
              type="submit"
              variant="contained"
              disableElevation
            >
              Cadastrar Paciente
            </Button>
          </Box>
        </form>
      </Box>
    </>
  )
}
