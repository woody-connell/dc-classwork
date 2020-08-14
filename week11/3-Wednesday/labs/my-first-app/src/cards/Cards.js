import React, { Component } from 'react';
import CardStyle from './CardStyle';
import {Row} from 'react-bootstrap';
import CardData from './CardData';

class Cards extends Component {
  render() {

    console.log(CardData);

    let cardsArr = CardData.map(card => {
      return <CardStyle buttonText/>
    })

    return (
      <>
        <Row>
          <CardStyle />
          <CardStyle />
          <CardStyle />
          <CardStyle />
          <CardStyle />
          <CardStyle />
          <CardStyle />
          <CardStyle />
        </Row>
      </>
    )
  }
}

export default Cards;
