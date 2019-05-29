import React, { Component } from 'react';
import classSet from 'react-classset';
import {
  Container,
  Row,
  Col,
  Button
} from 'reactstrap';
import Grid from '../components/Grid';

class DashboardBuilder extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
    };
  }

  toggle() {
    this.setState({
    });
  }

  render() {
    const { highlighted, hovered } = this.props;
    return (

      <Container className={"main-contaner"}>
        <Row>
          <Col md='2' className={"widget-drawer"} >
            <h2>Widgets</h2>
            <ul className={"widget-list"}>
            </ul>
          </Col>
          <Col md='10' className={classSet({
            'widget-builder': true,
            'widget-builder--highlighted': highlighted,
            'widget-builder--hovered': hovered,

          })}>
            <h2>Widget Builder</h2>
            <p>
              <Grid widgetPosition={[1,3]} className={"widget-builder-grid"}/>
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
    );
  }
}

export default DashboardBuilder;
