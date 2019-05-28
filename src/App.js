/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import logo from './logo.svg';
import './styles/App.scss';
import TopNav from './components/TopNav';
import {
  Container,
  Row,
  Col,
  Jumbotron,
  Button
} from 'reactstrap';


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
      <div className="App">
        <TopNav />
        <Jumbotron>
          <Container className={"widget-drawer"} navbar>
            <Row>
              <Col md='2'>
                <h2>Widgets</h2>
                <ul className={"widget-list"}>
                  <li>[Widget 1]</li>
                  <li>[Widget 2]</li>
                  <li>[Widget 3]</li>
                </ul>
              </Col>
              <Col md='10'>
                <h2>Widget Builder</h2>
                <p>
                  <Button
                    tag="a"
                    color="success"
                    size="large"
                    href="http://reactstrap.github.io"
                    target="_blank"
                  >
                    View Reactstrap Docs
                  </Button>
                </p>
              </Col>
            </Row>
          </Container>
        </Jumbotron>
      </div>
    );
  }
}

export default App;
