/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */

import React from 'react';

import Container from './styles';
import Ball from '../Styles/ball';

function Column({ stack, onClick }) {
  return (
    <Container onClick={onClick}>
      {stack.map((item, idx) => <Ball colorOption={item} key={idx} />)}
    </Container>
  );
}

export default Column;
