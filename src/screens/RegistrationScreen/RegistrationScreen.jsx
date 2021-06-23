import React, { useState } from 'react'

import { Box } from '@material-ui/core'

import { Header } from '../../containers/Header'
import { HeaderSearch } from '../../containers/HeaderSearch'
import { CardHeader } from '../../containers/CardHeader'

import { useStyles } from './registration-screen.styles'
import { Form } from '../../containers/Form'

export const RegistrationScreen = () => {
  const classes = useStyles()

  const [inputSearch, setInputSearch] = useState('')

  const handleChange = (value) => {
    setInputSearch(value)
    console.log('pesquisou')
  }

  return (
    <>
      <Header privateHeader={true} />
      <HeaderSearch
        handleInputChange={handleChange}
        inputPlaceHolder="Busque um Paciente"
        inputValue={inputSearch}
      />
      <CardHeader title="Cadastrar Paciente" />
      <Box className={classes.main}>
        <Form />
      </Box>
    </>
  )
}
