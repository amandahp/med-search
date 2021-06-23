import React from 'react'
import { AppBar as HeaderMui, Box, SwipeableDrawer } from '@material-ui/core'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import { useLocation, Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import MenuIcon from '@material-ui/icons/Menu'
import IconButton from '@material-ui/core/IconButton'

import { useStyles } from './header.styles'
import { Logo } from '../../utils/logo/logo'
import { User } from '../../components'

export const Header = (props) => {
  const { privateHeader = false, header = false } = props
  const classes = useStyles()

  const [drawerState, setDrawerState] = React.useState(false)

  const userData = useSelector((state) => state.auth)
  const { pathname } = useLocation()

  const headderButtons = [
    {
      title: 'Home',
      id: 'home',
      path: '/home',
      roles: ['user', 'admin'],
      active:
        pathname === '/' ||
        pathname.startsWith('/search') ||
        pathname.startsWith('/home')
    },
    {
      title: 'Cadastro',
      id: 'registration',
      path: '/registration',
      roles: ['user', 'admin'],
      active: pathname.startsWith('/registration')
    }
  ]
  const headder = [
    {
      title: 'Login',
      id: 'login',
      path: '/login',
      active:
        pathname === '/' ||
        pathname.startsWith('/search') ||
        pathname.startsWith('/home')
    }
  ]

  return (
    <Box className={classes.container}>
      <HeaderMui
        className={classes.appbar}
        color="transparent"
        position="sticky"
      >
        {header && (
          <>
            <Toolbar className={classes.desktopBar}>
              <Logo className={`${classes.logo}`} />
              {headder.map((button, index) => {
                return (
                  <Link
                    key={`link-one-${index}`}
                    to={button.path}
                    className={
                      button?.active ? classes.activeLink : classes.link
                    }
                  >
                    <Button
                      className={`${classes.button} ${
                        button?.active ? classes.activeButton : ''
                      }`}
                      variant="text"
                    >
                      {button.title}
                    </Button>
                  </Link>
                )
              })}
            </Toolbar>
          </>
        )}
        {privateHeader && (
          <>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={() => setDrawerState(!drawerState)}
              edge="start"
              className={classes.responsiveBarButton}
            >
              <MenuIcon />
            </IconButton>
            <Toolbar className={classes.desktopBar}>
              <Logo className={`${classes.logo}`} />
              {headderButtons.map((button, index) => {
                const show = button.roles.includes(
                  userData?.user?.role || 'user'
                )
                return (
                  show && (
                    <Link
                      key={`link-one-${index}`}
                      to={button.path}
                      className={
                        button?.active ? classes.activeLink : classes.link
                      }
                    >
                      <Button
                        className={`${classes.button} ${
                          button?.active ? classes.activeButton : ''
                        }`}
                        variant="text"
                      >
                        {button.title}
                      </Button>
                    </Link>
                  )
                )
              })}
            </Toolbar>
            <User />
          </>
        )}
      </HeaderMui>

      {privateHeader && (
        <>
          <SwipeableDrawer
            anchor="left"
            open={drawerState}
            onClose={() => setDrawerState(false)}
            onOpen={() => {}}
            className={classes.responsiveBar}
          >
            {headderButtons.map((button, index) => {
              const show = button.roles.includes(userData?.user?.role || 'user')
              return (
                show && (
                  <Link
                    key={`link-${index}`}
                    to={button.path}
                    className={
                      button?.active ? classes.activeLink : classes.link
                    }
                  >
                    <Button
                      className={`linkitem ${classes.button} ${
                        button?.active ? classes.activeButton : ''
                      }`}
                      variant="text"
                    >
                      {button.title}
                    </Button>
                  </Link>
                )
              )
            })}
          </SwipeableDrawer>
        </>
      )}
    </Box>
  )
}
