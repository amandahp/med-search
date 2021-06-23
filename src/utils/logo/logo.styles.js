import { createStyles, makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) =>
  createStyles({
    logo: {
      width: '100px',
      padding: theme.spacing(8, 0, 6, 0),
      marginTop: theme.spacing(3),
      marginRight: theme.spacing(10)
    }
  })
)
