import { createStyles, makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) =>
  createStyles({
    container: {
      minHeight: '100%',
      [theme.breakpoints.between(
        theme.breakpoints.width('xs'),
        theme.breakpoints.width('sm')
      )]: {
        maxWidth: '100%'
      },
      [theme.breakpoints.up('md')]: {
        maxWidth: '25rem'
      }
    },

    button: {
      marginTop: theme.spacing(4),
      backgroundColor: theme.palette.primary.light,
      color: theme.palette.text.disabled
    },
    email: {
      marginBottom: theme.spacing(5),
      '& input': {
        backgroundColor: theme.palette.background.paper
      },
      '& div': {
        backgroundColor: theme.palette.primary.light
      }
    }
  })
)
