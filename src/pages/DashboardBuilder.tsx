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
import InitState from '../staticState.json';

export interface IProps {
  highlighted?: boolean;
  hovered?: boolean;
};

export interface IState {
  target?: string;
  source?: string;
};

class DashboardBuilder extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.placeWidget = this.placeWidget.bind(this);
    this.setTarget = this.setTarget.bind(this);
    this.state = {...InitState[0], ...{
      target: '',
      source: '',
    }};
  }

  toggle() {
    this.setState({
    });
  }

  placeWidget(source: any) {
    const { target } = this.state;
    const sourceType = source.children.props.type;
    console.log('placeWidget', target, sourceType);
    this.setState({ source })

  }

  setTarget(target: any) {
    // if () return;
    console.log('setTarget', typeof(target));
    this.setState({ target })
  }

  render() {
    //const { highlighted, hovered } = this.props;
    console.log(this.state);
    // const { widgets } = this.state;

    return (

      <div className={"main-contaner"}>
        <Row>
          <Col md='2' className={"widget-drawer"} >
            <h2>Widgets</h2>
            <ul className={"widget-list"}>
              <li>
                <Draggable _id={1} onDrop={() => this.placeWidget}>
                  <Widget type={WidgetTypes.CELL} />
                </Draggable>
              </li>
              <li>
                <Draggable _id={2} onDrop={() => this.placeWidget}>
                  <Widget type={WidgetTypes.ROW} />
                </Draggable>
              </li>
            </ul>
          </Col>
          <Col md='10' className={'someclass'}>
            <h2>Dashboard Builder</h2>
            <Grid
              geometry={[2,4]}
              className={"widget-builder-grid"}
              onDrop={this.setTarget}
            />
          </Col>
        </Row>
      </div>
    );
  }
}

export default DashboardBuilder;
