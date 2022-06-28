/* eslint-disable react/prop-types */
import React from 'react';
import { GameTurnProvider } from './GameTurn';
import { LastPiecePuttedProvider } from './LastPiecePutted';
import { MatrixProvider } from './Matrix';

function Providers({ children }) {
  return (
    <MatrixProvider>
      <GameTurnProvider>
        <LastPiecePuttedProvider>
          {children}
        </LastPiecePuttedProvider>
      </GameTurnProvider>
    </MatrixProvider>
  );
}

export default Providers;
