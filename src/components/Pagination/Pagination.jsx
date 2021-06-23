import React from 'react'

import { Pagination } from '@material-ui/lab'

import { useStyles } from './pagination.styles'

export const PaginationComponent = (props) => {
  const classes = useStyles()
  return (
    <Pagination
      color="primary"
      showFirstButton
      showLastButton
      className={classes.PaginationClass}
      count={props.count}
      page={props.page}
      onChange={props.onChangePage}
    />
  )
}
