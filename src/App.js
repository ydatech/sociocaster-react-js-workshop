import React, { Component } from 'react';

import './App.css';

// material-ui
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

// theme
import theme from './config/theme';

// app containers
import Water from './containers/Water';
import Todo from './containers/Todo';
import Navbar from './containers/Navbar';
import Home from './containers/Home';
import NotFound from './containers/NotFound';
import Login from './containers/Login';
import Post from './containers/Post';

// react-router
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import PrivateRoute from './components/PrivateRoute';

// touch tap event plugin
import injectTapEventPlugin from 'react-tap-event-plugin';


injectTapEventPlugin();

class App extends Component {
  state = {
    user: {
      isAuthenticated: true
    }

  }
  render() {
    return (
      <MuiThemeProvider
        muiTheme={getMuiTheme(theme)}
      >
        <Router>
          <div className="App">
            <Route component={Navbar} />
            <div className="App-Content">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/water" component={Water} />
                <Route path="/post" component={Post} />
                <PrivateRoute
                  path="/todo"
                  component={Todo}
                  user={this.state.user}
                />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;
