import { createStyles, makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) =>
  createStyles({
    headerContainer: {
      display: 'flex',
      width: '100%',
      padding: theme.spacing(4, 0, 0, 0.75),
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      backgroundColor: theme.palette.background.default,
      [theme.breakpoints.down(theme.breakpoints.width('sm'))]: {
        flexDirection: 'column'
      }
    },
    root: {
      height: '7.8rem',
      padding: theme.spacing(8, 8),
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: theme.palette.background.paper,
      [theme.breakpoints.down(theme.breakpoints.width('md'))]: {
        display: 'flex',
        flexDirection: 'column'
      }
    },
    inputClass: {
      width: '100%'
    },
    cardHeaderInput: {
      width: '100%'
    },
    container: {
      [theme.breakpoints.down(theme.breakpoints.width('xs', 'md'))]: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start'
      }
    },
    searchInput: {
      height: '3rem',
      display: 'flex',
      flexDirection: 'row',
      backgroundColor: theme.palette.background.paper,
      [theme.breakpoints.down(theme.breakpoints.width('md'))]: {
        minWidth: '70vw',
        maxWidth: '77vw'
      },
      [theme.breakpoints.down(theme.breakpoints.width('sm'))]: {
        minWidth: '75vw',
        maxWidth: '77vw'
      },
      [theme.breakpoints.down(theme.breakpoints.width('xs'))]: {
        minWidth: '75vw',
        maxWidth: '77vw'
      }
    }
  })
)
