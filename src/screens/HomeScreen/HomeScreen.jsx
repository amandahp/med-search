import React, { useState } from 'react'

import { Box } from '@material-ui/core'

import { Header } from '../../containers/Header'
import { HeaderSearch } from '../../containers/HeaderSearch'
import { CardHeader } from '../../containers/CardHeader'
import { CardEnterprise } from '../../components/Card/Card'

import { useStyles } from './home-screen.styled'

export const HomeScreen = () => {
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
      <CardHeader title="Pacientes" showInput={true} />
      <Box className={classes.main}>
        <CardEnterprise />
      </Box>
    </>
  )
}
