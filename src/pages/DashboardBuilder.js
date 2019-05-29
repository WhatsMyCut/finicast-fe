/* eslint-disable no-unused-vars */
import '../styles/Dashboards.scss'
import React, { Component } from 'react';
import classSet from 'react-classset';
import {
  Container,
  Row,
  Col,
  Button
} from 'reactstrap';
import Grid from '../components/Grid';
import { WidgetTypes } from '../models/WidgetTypes';
import Draggable from '../components/Draggable';
import Widget from '../models/Widget';

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

      <div className={"main-contaner"}>
        <Row>
          <Col md='2' className={"widget-drawer"} >
            <h2>Widgets</h2>
            <ul className={"widget-list"}>
              <li>
                <Draggable onDrop={(props) => console.log('dropped', props)}>
                  <Widget type={WidgetTypes.CELL} />
                </Draggable>
              </li>
            </ul>
          </Col>
          <Col md='10' className={classSet({
            'widget-builder': true,
            'widget-builder--highlighted': highlighted,
            'widget-builder--hovered': hovered,

          })}>
            <h2>Dashboard Builder</h2>
            <Grid widgetposition={[1,3]} className={"widget-builder-grid"}/>
          </Col>
        </Row>
      </div>
    );
  }
}

export default DashboardBuilder;
