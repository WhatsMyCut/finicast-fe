/* eslint-disable no-unused-vars */
import '../styles/Dashboards.scss'
import React, { Component } from 'react';
import {
  Row,
  Col,
} from 'reactstrap';
import Grid from '../components/Grid';
import { WidgetTypes } from '../models/WidgetTypes';
import Draggable from '../components/Draggable';
import Widget from '../models/Widget';

export interface IProps {
  highlighted?: boolean;
  hovered?: boolean;
};

class DashboardBuilder extends Component<IProps, {}> {
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

  placeWidget(props:any, monitor: any, component: any) {
    console.log('placeWidget', props, monitor, component)
  }

  render() {
    const { highlighted, hovered } = this.props;
    console.log(highlighted, hovered);

    return (

      <div className={"main-contaner"}>
        <Row>
          <Col md='2' className={"widget-drawer"} >
            <h2>Widgets</h2>
            <ul className={"widget-list"}>
              <li>
                <Draggable>
                  <Widget type={WidgetTypes.CELL} />
                </Draggable>
              </li>
            </ul>
          </Col>
          <Col md='10' className={'someclass'}>
            <h2>Dashboard Builder</h2>
            <Grid
              geometry={[2,4]}
              className={"widget-builder-grid"}
              onDrop={() => this.placeWidget}
            />
          </Col>
        </Row>
      </div>
    );
  }
}

export default DashboardBuilder;
