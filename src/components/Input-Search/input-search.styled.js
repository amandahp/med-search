import { createStyles, makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      display: 'flex',
      alignItems: 'center',
      height: '2.25rem',
      width: '26.3125rem',
      fontSize: '0.875rem',
      borderRadius: theme.spacing(1),
      backgroundColor: theme.palette.background.default
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1,
      fontSize: '0.875rem'
    },
    iconButton: {
      cursor: 'pointer',
      padding: 15,
      height: '0.72875rem',
      width: '0.72875rem',
      '& .MuiSvgIcon-root': {
        fontSize: '1rem'
      }
    }
  })
)
