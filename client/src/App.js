import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import "./App.css";

import Footer from "./components/layout/Footer";
import Feed from "./components/feed/Feed";
import Login from "./components/login/Login";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/" component={Feed} />
            <Route exact path="/login" component={Login} />
          </Switch>
        </Router>
        <Footer />
      </Provider>
    );
  }
}
export default App;
