import React from 'react'
import CssBasline from '@mui/material/CssBaseline';
import { Switch, Route } from 'react-router-dom';
import useStyles from './Styles'
import { Actors, Movieinformation, NavBar, Profile, Movie } from './index';
const App = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBasline />
      <NavBar />
      <main className={classes.toolbar}>
        <div className={classes.content}>
        <Switch>
          <Route exact path='/'>
            <Movie />
          </Route>
          <Route exact path='/movie/:id'>
        <Movieinformation />
          </Route>
          <Route exact path='/actor/:id'>
            <Actors />
          </Route>
          <Route exact path='/profile/:id'>
           <Profile />
          </Route>
          </Switch>
          </div>
     </main>
    </div>
  )
}

export default App