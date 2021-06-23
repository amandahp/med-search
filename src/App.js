import React from 'react'
import { BrowserRouter, Switch } from 'react-router-dom'
import { ThemeProvider } from '@material-ui/core'
import CssBaseline from '@material-ui/core/CssBaseline'

import createMyTheme from './theme/theme'
import buildRoutes from './routes/Router'

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={createMyTheme()}>
        <CssBaseline />
        <Switch>{buildRoutes()}</Switch>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
