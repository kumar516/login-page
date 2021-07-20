import { Provider } from 'react-redux';
import { store } from './store';
import React, { Component } from "react";
import LoginPage from './components/loginPage';
import HomePage from './components/homePage';
import "./css/responsive.css";
import {
  HashRouter,
  Switch,
  Route
} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <HashRouter>
          <div className="App">
            <Switch>
              <Route path={'/'} exact component={LoginPage} />
              <Route path={"/login"} component={LoginPage} />
              <Route path={"/home"} component={HomePage} />
            </Switch>
          </div>
        </HashRouter>
      </Provider>
    );
  }
}

export default App;
