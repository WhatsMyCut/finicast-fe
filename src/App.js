/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import classSet from 'react-classset';
import logo from './logo.svg';
import './styles/App.scss';
import TopNav from './components/TopNav';
import Dashboard from './pages/Dashboard';
import DashboardBuilder from './pages/DashboardBuilder';


class App extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      navbarTitle: "Dashboard Builder",
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <Router>
        <div className="App">

        <TopNav />
        <Route path="/" exact component={Dashboard} />
        <Route path="/dashbuilder/" component={DashboardBuilder} />
        </div>
      </Router>
    );
  }
}

export default App;
