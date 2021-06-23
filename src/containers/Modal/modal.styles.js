import { createStyles, makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) =>
  createStyles({
    Modal: {
      margin: '30px',
      '& input': {},
      '& select': {}
    },
    cancelButton: {
      maxHeight: '36px',
      padding: theme.spacing(2.5, 4),
      marginRight: '15px'
    },

    submitButton: {
      fontSize: '14px',
      maxHeight: '36px',
      padding: theme.spacing(2.5, 4),
      fontWeight: 600,
      color: theme.palette.common.white,
      backgroundColor: theme.palette.primary.light
    }
  })
)
