import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import {
  Dialog,
  Box,
  Grid,
  Select,
  TextField,
  Button,
  InputLabel,
  FormControl,
  MenuItem
} from '@material-ui/core'

import { useStyles } from './modal.styles'

export const Modal = (props) => {
  const classes = useStyles()
  const sexo = ['Feminino', 'Masculino']
  const genderIdentity = ['Cisgênero', 'Transgênero', 'Não-binário']
  const { control, handleSubmit } = useForm()
  const { open, setOpen, onCloseAction } = props

  const handleClose = () => {
    setOpen(false)
    if (onCloseAction) onCloseAction()
  }

  const onSubmit = (data) => console.log(data)

  return (
    <Dialog onClose={handleClose} open={open} className={classes.modal}>
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

          <Box flexDirection="row" justifyContent="flex-end" padding="20px 0">
            <Button
              className={classes.submitButton}
              type="submit"
              variant="contained"
              disableElevation
            >
              Cadastrar Novo Paciente
            </Button>
          </Box>
        </form>
      </Box>
    </Dialog>
  )
}
