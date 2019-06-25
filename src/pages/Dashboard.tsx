import React, { Component } from 'react';
import {
  Container,
  Row,
  Col,
} from 'reactstrap';

export interface IProps {
  highlighted?: boolean;
  hovered?: boolean;
};

class Dashboard extends Component<IProps, {}> {
  constructor(props: IProps) {
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
    console.log(highlighted, hovered);
    return (
      <Container>
        <Row>
          <Col md='12' className={'someclass'}>
            <h2>Widgets</h2>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Dashboard;
