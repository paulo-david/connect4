/* eslint-disable react/no-array-index-key */
import React, { useContext } from 'react';
import Column from './Components/Column';
import Board from './Components/Styles/board';

import { MatrixContext } from './Providers/Matrix';
import { GameTurnContext } from './Providers/GameTurn';
import { LastPiecePuttedContext } from './Providers/LastPiecePutted';

function App() {
  // eslint-disable-next-line no-unused-vars
  const { matrix, addToMatrix, cleanMatrix } = useContext(MatrixContext);
  const { gameTurn, togglePlayer } = useContext(GameTurnContext);
  const { lastPiecePutted, updatePiece } = useContext(LastPiecePuttedContext);

  const checkVictory = () => {
    console.log(lastPiecePutted);
  };

  const selectColumn = (idx) => {
    const lastZero = matrix[idx].lastIndexOf(0);

    if (lastZero === -1) {
      console.log('error: column is full');
      return;
    }

    addToMatrix(gameTurn, [idx, lastZero]);
    console.log(matrix);
    updatePiece([idx, lastZero]);

    checkVictory();

    togglePlayer();

    // verify is board is full
  };

  return (
    <div className="App">

      <Board>
        {matrix.map((stack, idx) => (
          <Column
            stack={stack}
            onClick={() => selectColumn(idx)}
            key={idx}
          />
        ))}
      </Board>

    </div>
  );
}

export default App;
