import { createStyles, makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) =>
  createStyles({
    headerContainer: {
      display: 'flex',
      width: '100%',
      padding: theme.spacing(1, 0, 0, 0.75),
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      backgroundColor: theme.palette.background.default,
      [theme.breakpoints.down(theme.breakpoints.width('sm'))]: {
        flexDirection: 'column'
      }
    },
    box: {
      padding: theme.spacing(10, 0, 4, 0),
      margin: theme.spacing(0, 16, 9, 16),
      borderBottom: `${theme.spacing(0.25)}px solid ${
        theme.palette.primary.main
      }`
    },
    titleContainer: {
      flex: 6
    },
    Title: {
      fontSize: '20px',
      fontWeight: 'bold',
      color: theme.palette.text.disabled
    },
    select: {
      height: '1.5rem',
      minWidth: '10rem'
    }
  })
)
