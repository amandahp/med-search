import React from 'react'

import { Typography, Select, MenuItem, Box } from '@material-ui/core'

import { useStyles } from './card-header.styles'

export const CardHeader = (props) => {
  const classes = useStyles()

  const {
    title = '',
    selectOptions = [],
    handleChangeSelect = () => {},
    selectedValue,
    showInput = false
  } = props

  return (
    <Box className={classes.headerContainer}>
      <Box className={classes.titleContainer}>
        <Box flexDirection="column">
          <section className={classes.box}>
            <Typography className={classes.Title}>{title}</Typography>
            {showInput && (
              <Select
                disableUnderline
                autoWidth
                className={classes.select}
                value={selectedValue}
                onChange={() => handleChangeSelect()}
              >
                {selectOptions.map((options, index) => {
                  return (
                    <MenuItem key={index + options.label} value={options.value}>
                      <Typography variant="h6">{options.label}</Typography>
                    </MenuItem>
                  )
                })}
              </Select>
            )}
          </section>
        </Box>
      </Box>
    </Box>
  )
}
