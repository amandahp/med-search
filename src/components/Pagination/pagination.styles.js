import { createStyles, makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) =>
  createStyles({
    PaginationClass: {
      '& .MuiPaginationItem-textPrimary.Mui-selected': {
        backgroundColor: theme.palette.primary.dark,
        cursor: 'pointer',
        '& :hover': {
          backgroundColor: theme.palette.primary.light
        }
      },
      '& .MuiButtonBase-root': {}
    }
  })
)
