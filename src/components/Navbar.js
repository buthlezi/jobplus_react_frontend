
import { AppBar, Badge, Box, Divider, Drawer, Hidden, List, ListItem, ListItemText, Tab, Tabs, Toolbar, Typography, IconButton } from '@material-ui/core'
import React from 'react'

import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/styles';

import { useState, useEffect} from 'react'


const useStyles = makeStyles((theme) => ({
  // creating a new class called container
  container: {
    ...theme.container
    // ... ignores curly brackets in theme.container and spreads the contents
  },
  iconsWrap: {
    marginLeft: 'auto',
    '& .MuiButtonBase-root': {
      marginLeft: '13px'
    },
    '& .MuiSvgIcon-root': {
      fontSize: '27px'
    }
  },
  tabs: {
    '& .MuiTab-root' :{
      minWidth: 10,
      marginLeft: '10px'
    }
  },
  hamburger: {
    fontSize: '35px',
    marginRight: '10px'
  },
  logo: {
    ...theme.fonts.bold,
  },
  badge: {
    backgroundColor: theme.palette.error.main,
    border: '1px white solid',
  },
  indicator: {
    backgroundColor: theme.palette.common.light,
  },
  drawerHeader: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: theme.spacing(0,1),
    ...theme.mixins.toolbar,
    // necessary for content to be below app bar
  }
}));

// create useState
export default function Navbar() {
  const classes = useStyles();

  const [openDrawer, setOpenDrawer] = useState(false);

  // openDrawer is a Boolean variable, setOpenDrawer is a function 
  // used to alter the variable's state

  const handleDrawerOpen = () => {
    setOpenDrawer(true)
  }

  const handleDrawerClose = () => {
  setOpenDrawer(false)
  }

  // create tabIndex useState
  const [tabIndex, setTabIndex] = useState(false);

  const handleTabIndexChange = (event, index) => {
    setTabIndex(index)
  }

  // array
  // optimize links
  const routes = [
    {name: 'Home', link: '/', index: 0},
    {name: 'Job Listings', link: '/job-listings', index: 1},
    {name: 'Job Applications', link: '/job-applications', index: 2},
  ]
  // useEffect to manage url path
  // takes care of setting active link when refreshed
  useEffect(() => {
    routes.forEach(route => {
      switch (window.location.pathname) {
        case `${route.link}`:
          setTabIndex(route.index);
          break;
        default:
          return false;
        }
      })
    },
  )

  return (
    <Box>
      <AppBar position="static" >
        <Toolbar className={classes.container}>
            <Hidden mdUp>
              {/* call handleDrawerOpen state on MenuIcon onClick */}
              <IconButton
              edge='start'
              color='inherit'
              arial-label='menu'
              onClick={handleDrawerOpen}
          >
              <MenuIcon className={classes.hamburger}/>
            </IconButton>
        </Hidden>
        <Typography component="h6" className={classes.logo}>JOBPLUS</Typography>
        <Hidden smDown>
          {/* add value and onChange onto tabs */}
          <Tabs 
            value={tabIndex}
            onChange={handleTabIndexChange}
            className={classes.tabs} 
            classes={{ indicator: classes.indicator}}
          >
            {/* make tabs dynamic */}
            {routes.map((route, index) => (
              <Tab 
                key={`${route}${index}`}
                // concatenation requires `${}`
                label={route.name}
                component={Link}
                to={route.link}
              />
            ))} 

          
          </Tabs>
        </Hidden>

        <Box className={classes.iconsWrap}>
          <IconButton size='small' component={Link} to={'/search'} color='inherit' edge='start' >
            <SearchIcon />
          </IconButton>

          <IconButton size='small' component={Link} to={'/notifications'} color='inherit' edge='start' >
            <Badge color='error' overlap='circular' variant='dot'>
              <NotificationsNoneIcon />
            </Badge>
          </IconButton>

          <IconButton size='small' component={Link} to={'/saved-jobs'} color='inherit' edge='start' >
            <Badge badgeContent={2} classes={{ badge: classes.badge }} showZero>
              <StarBorderIcon />
            </Badge>
          </IconButton>

          <IconButton size='small' component={Link} to={'/profile'} color='inherit' edge='start' >
            <PersonOutlineIcon />
          </IconButton>
          
          <IconButton size='small' component={Link} to={'/login'} color='inherit' edge='start' >
            <ExitToAppIcon />
          </IconButton>
          
        </Box>
        </Toolbar>
      </AppBar>
     
      <Drawer 
        variant="persistent" 
        anchor="left" 
        open={openDrawer}>
        <div className={classes.drawerHeader}>
          {/* set handleDrawerClose state on Chevron button */}
        <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        {/* make ListItem dynamic */}
        <List>
        {routes.map((route, index) => (  
          <ListItem 
            key={`${route}${index}`} 
            component={Link} 
            to={route.link} 
            selected={window.location.pathname === route.link}
            onClick={handleDrawerClose} 
            button>
              <ListItemText primary={route.name} />
          </ListItem>
        ))}
        </List>
        </Drawer>
    </Box>
  )
}

