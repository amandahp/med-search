import { createMuiTheme } from '@material-ui/core/styles'

import typography from './typography'

export default function createMyTheme() {
  return createMuiTheme({
    palette: {
      primary: {
        light: '#009859',
        main: '#C4C4C4'
      },
      background: {
        paper: '#F5F5F5',
        default: '#FFF'
      },
      text: {
        primary: '#009859',
        secondary: '#B1D34B',
        hint: '#000000',
        disabled: '#A3A3A3'
      }
    },
    spacing: 4,
    typography
  })
}
