import React from 'react'
import './App.css'
import Home from './components/Home'
import NewPatient from './components/NewPatient'
import OldPatient from './components/OldPatient'
import Login from './components/Login'
import HomeAdmin from './components/HomeAdmin'
import ListTreatment from './components/ListTreatment'
import AddTreatment from './components/AddTreatment'

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
function App () {
  return (
    <Router>
      <Link to='/'>Home</Link>
      <Switch>
        <Route exact path='/'>
          <Login />
        </Route>
        <Route path='/NewPatient'>
          <NewPatient />
        </Route>
        <Route path='/ExistingPatient'>
          <OldPatient />
        </Route>
        <Route path='/HomeAdmin'>
          <HomeAdmin />
        </Route>
        <Route path='/ListTreatment'>
          <ListTreatment />
        </Route>
        <Route path='/AddTreatment'>
          <AddTreatment />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
