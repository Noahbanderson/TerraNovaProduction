import React from 'react';
import Home from './components/home/Home';
import NoMatch from './components/NoMatch';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Register from './components/Register';
import Terms from './components/home/Terms';
import FetchUser from './components/FetchUser';
import ProtectedRoute from './components/ProtectedRoute';
import Reservation from './components/Reservation';
import { Switch, Route, } from 'react-router-dom';
import { Container, } from "semantic-ui-react";
import { StateProvider } from './providers/StateProvider';


const App = () => (
  <>
    <Navbar />
    <FetchUser>
        <Switch>
          <Route exact path="/" component={Home} />
          <StateProvider>
            <Route exact path="/reservation" component={Reservation} />
          </StateProvider>
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/termsconditions" component={Terms} />
          <Route component={NoMatch} />
        </Switch>
    </FetchUser>
  </>
)

export default App;
