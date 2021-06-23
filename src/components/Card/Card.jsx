import React, { useState } from 'react'

import {
  Box,
  Grid,
  Button,
  CardMedia,
  CardContent,
  CardActions,
  CardActionArea,
  Card,
  Typography
} from '@material-ui/core'

import { Modal } from '../../containers/Modal'
import { useStyles } from './card.styles'
import { PaginationComponent } from '../index'

export const CardEnterprise = (props) => {
  const {
    nameEnterprise = 'Null',
    description = 'Null',
    count = '3',
    page = '5',
    handleChangePage = () => console.log('')
  } = props
  const [openCreate, setOpenCreate] = useState(false)
  const classes = useStyles()

  const handleClick = () => {
    setOpenCreate(true)
  }

  return (
    <Grid>
      <Modal open={openCreate} setOpen={setOpenCreate} />
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia className={classes.media} title="Contemplative Reptile" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {nameEnterprise}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button onClick={handleClick} size="small" className={classes.button}>
            Ver Mais +
          </Button>
        </CardActions>
      </Card>
      <Box
        borderBottom={0}
        justifyContent="flex-center"
        className={classes.boxPagination}
        data-testid="table_pagination"
      >
        <PaginationComponent
          count={count}
          page={page}
          onChangePage={handleChangePage}
        />
      </Box>
    </Grid>
  )
}
