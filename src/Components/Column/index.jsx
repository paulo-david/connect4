/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */

import React, { useContext } from 'react';
import { GameTurnContext } from '../../Providers/GameTurn';

import Container from './styles';
import Ball from '../Styles/ball';

function Column({ stack, onClick }) {
  const { gameTurn } = useContext(GameTurnContext);
  return (
    <Container onClick={onClick} colorTurn={gameTurn}>
      {stack.map((item, idx) => <Ball colorOption={item} key={idx} />)}
    </Container>
  );
}

export default Column;
