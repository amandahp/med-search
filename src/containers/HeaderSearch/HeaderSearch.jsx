import React from 'react'

import { Box, Grid, Container } from '@material-ui/core'

import { InputSearch } from '../../components/Input-Search/InputSearch'

import { useStyles } from './header-search.styles'

export const HeaderSearch = (props) => {
  const {
    handleInputChange,
    handleClickInput = () => {},
    inputPlaceHolder,
    inputValue = '',
    handleClearSearch = () => {}
  } = props
  const classes = useStyles()

  return (
    <Container className={classes.container} maxWidth="xl">
      <Grid container spacing={6} className={classes.root}>
        <Grid item xs={4}>
          <Box className={classes.searchInput}>
            <Box className={classes.cardHeaderInput}>
              <div>
                <InputSearch
                  inputPlaceHolder={inputPlaceHolder}
                  handleClear={handleClearSearch}
                  className={classes.inputClass}
                  handleChange={handleInputChange}
                  handleClick={handleClickInput}
                  inputValue={inputValue}
                />
              </div>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  )
}
