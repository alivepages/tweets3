import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import LoginPage from './containers/LoginPage';
import Visits from './containers/Visits';
import Tweets from './containers/Tweets';
import Visit from './containers/Visit';
import Users from './containers/Users';
import User from './containers/User';
import Stats from './containers/Stats';
import All from './containers/All';
import Actives from './containers/Actives';


const DynamicRoute = (props) => {
  const styleObj = {padding: '3rem', fontSize: '6vw', color: '#0E6655'}
  return <h2 style={styleObj}>Dynamic Route: <u>{props.match.params.routeVal}</u></h2>
}

const DemoComponent = () => {
  const styleObj = {padding: '3rem', fontSize: '6vw', color: 'slateblue'}
  return <h2 style={styleObj}>Demo Route U</h2>
}

const NoMatch404 = () => {
  const styleObj = {padding: '3rem', fontSize: '6vw', color: 'indianred'}
  return <h2 style={styleObj}>No Match - 404</h2>
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
        <Route path='/login' component={LoginPage}/>
        <Route path='/tweets' component={Tweets}/>
        <Route path='/visits' component={Visits}/>
        <Route path='/visit/:id' component={Visit}/>
        <Route path='/all' component={All}/>
        <Route path='/actives' component={Actives}/>
        <Route path='/users' component={Users}/>
        <Route path='/user/:id' component={User}/>
        <Route path='/stats' component={Stats}/>
        <Route path='/' component={Stats}/>
        <Route component={NoMatch404}/>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
