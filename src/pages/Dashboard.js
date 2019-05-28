import React, { Component } from 'react';
import classSet from 'react-classset';
import {
  Container,
  Row,
  Col,
} from 'reactstrap';

class Dashboard extends Component {
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
      <Container>
        <Row>
          <Col md='12' className={classSet({
            'widget-builder': true,
            'widget-builder--highlighted': highlighted,
            'widget-builder--hovered': hovered,

          })}>
            <h2>Widgets</h2>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Dashboard;
