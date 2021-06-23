import { createStyles, makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(() =>
  createStyles({
    main: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  })
)
