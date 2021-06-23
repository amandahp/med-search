import { createStyles, makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) =>
  createStyles({
    container: {
      display: 'flex',
      flexDirection: 'column',
      fontWeight: 700,
      fontSize: '20px',
      color: theme.palette.text.secondary,
      padding: theme.spacing(4, 0),
      background: theme.palette.background.paper,
      justifyContent: 'center',
      alignItems: 'center',
      minWidth: '100%',
      minHeight: '100vh'
    },

    containerResponsive: {
      display: 'flex',
      flexDirection: 'column',
      marginBottom: theme.spacing(12.5),
      [theme.breakpoints.between(
        theme.breakpoints.width('xs'),
        theme.breakpoints.width('md')
      )]: {
        maxWidth: '20rem'
      },
      [theme.breakpoints.up('lg')]: {
        maxWidth: '25rem'
      }
    },

    form: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      [theme.breakpoints.between(
        theme.breakpoints.width('xs'),
        theme.breakpoints.width('md')
      )]: {
        maxWidth: '18rem'
      },
      '& input': {
        backgroundColor: theme.palette.background.paper,
        color: theme.palette.text.secondary
      }
    }
  })
)
