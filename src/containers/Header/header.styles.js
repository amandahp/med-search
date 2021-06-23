import { createStyles, makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) =>
  createStyles({
    container: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center'
    },
    logo: {
      display: 'block',
      justifyContent: 'flex-start',
      minWidth: theme.spacing(26)
    },
    appbar: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      maxHeight: theme.spacing(18),
      backgroundColor: theme.palette.background.default,
      boxShadow: 'none',
      padding: theme.spacing(0, 3)
    },
    button: {
      minWidth: theme.spacing(26),
      padding: theme.spacing(8, 0, 2, 0),
      textDecoration: 'none',
      borderRadius: 0,
      color: theme.palette.text.disabled,
      fontWeight: 'bold',
      textTransform: 'capitalize',
      '&:hover': {
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary
      }
    },
    activeButton: {
      color: theme.palette.text.primary,
      fontWeight: theme.typography.fontWeightBold
    },
    activeLink: {
      textDecoration: 'none',
      borderBottom: `${theme.spacing(1)}px solid ${
        theme.palette.primary.light
      }`,
      color: theme.palette.text.primary,
      fontWeight: theme.typography.fontWeightBold
    },
    link: {
      textDecoration: 'none',
      borderBottom: `${theme.spacing(1)}px solid transparent`,
      color: theme.palette.text.primary,
      fontWeight: theme.typography.fontWeightRegular
    },
    desktopBar: {
      [theme.breakpoints.down(theme.breakpoints.width('md'))]: {
        display: 'none'
      }
    },
    responsiveBarButton: {
      [theme.breakpoints.up(theme.breakpoints.width('md'))]: {
        display: 'none'
      }
    },
    responsiveBar: {
      '& .MuiDrawer-paper': {
        '& .linkitem': {
          width: '10rem',
          padding: theme.spacing(5, 0, 5, 4),
          justifyContent: 'flex-start'
        }
      }
    }
  })
)
