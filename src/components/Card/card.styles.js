import { createStyles, makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      maxWidth: 345
    },
    media: {
      height: 140
    },
    button: {
      backgroundColor: theme.palette.primary.light,
      color: theme.palette.text.disabled
    },
    boxPagination: {
      ' & nav': {
        display: 'flex',
        justifyContent: 'center',
        marginTop: theme.spacing(21.25)
      }
    }
  })
)
