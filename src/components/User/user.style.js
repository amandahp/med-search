import { createStyles, makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) =>
  createStyles({
    avatarContainer: {
      width: 48,
      height: 48,
      marginLeft: theme.spacing(8),
      marginTop: '-20px',
      backgroundColor: theme.palette.primary.light,
      cursor: 'pointer',
      '&:hover': {
        opacity: 0.8
      }
    },
    avatarIcon: {
      width: '100%',
      height: '100%',
      color: theme.palette.secondary.default
    },
    userBox: {
      display: 'flex'
    },
    userInfo: {
      display: 'flex',
      flexDirection: 'row',
      paddingRight: theme.spacing(7),
      paddingTop: theme.spacing(11.2)
    },
    userInfoName: {
      display: 'flex',
      fontSize: '1rem',
      color: theme.palette.primary.light
    },
    username: {
      fontWeight: theme.typography.fontWeightBold,
      marginLeft: theme.spacing(1),
      marginBottom: theme.spacing(0.32)
    },
    menuContainer: {
      marginLeft: theme.spacing(8),
      marginTop: theme.spacing(13.4)
    },
    menuItem: {
      minWidth: '8rem',
      backgroundColor: theme.palette.background.default
    }
  })
)
