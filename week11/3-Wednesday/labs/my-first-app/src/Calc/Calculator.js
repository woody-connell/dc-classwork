import React, { Component } from 'react';
import {Row} from 'react-bootstrap';
import CalcStyle from './CalcStyle';
import './styles.css'



class Calc extends Component {
  render() {

    

    return (
      <>
         <Row>
        <CalcStyle text={"0"} styleName=".greyBG" />
        </Row>
        <Row>
        <CalcStyle text={"AC"} styleName=".greyBG" />
        <CalcStyle text={"+"} styleName=".greyBG" />
        <CalcStyle text={"%"} styleName=".greyBG" />
        <CalcStyle text={"X"} styleName=".greyBG" />
        </Row>
        <Row>
        <CalcStyle text={7} styleName=".greyBG" />
        <CalcStyle text={8} styleName=".greyBG" />
        <CalcStyle text={9} styleName=".greyBG" />
        <CalcStyle text={"X"} styleName=".greyBG" />
        </Row>
        <Row>
        <CalcStyle text={4} styleName=".greyBG" />
        <CalcStyle text={5} styleName=".greyBG" />
        <CalcStyle text={6} styleName=".greyBG" />
        <CalcStyle text={"-"} styleName=".greyBG" />
        </Row>
        <Row>
        <CalcStyle text={1} styleName=".greyBG" />
        <CalcStyle text={2} styleName=".greyBG" />
        <CalcStyle text={3} styleName=".greyBG" />
        <CalcStyle text={"+"} styleName=".greyBG" />
        </Row>
        <Row>
        <CalcStyle text={0} styleName=".zeroButton" />
        <CalcStyle text={"."} styleName=".greyBG" />
        <CalcStyle text={"="} styleName=".greyBG" />
        </Row>
      </>
    )
  }
}

export default Calc;