/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
//import logo from './logo.svg';
import './styles/App.scss';
import TopNav from './components/TopNav';
import Dashboard from './pages/Dashboard';
import DashboardBuilder from './pages/DashboardBuilder';

export interface IProps {};
export interface IState {
  isOpen?: boolean;
  navbarTitle?: string;
};

class App extends Component<IProps, IState> {
  state: { isOpen: false; navbarTitle: string; };
  constructor(props: IProps, state: IState) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {...state, ...{
      isOpen: false,
      navbarTitle: "Dashboard Builder",
    }};
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
