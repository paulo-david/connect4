/* eslint-disable no-plusplus */
/* eslint-disable react/no-array-index-key */
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import React, { useContext } from 'react';
import Column from './Components/Column';
import Board from './Components/Styles/board';

import { MatrixContext } from './Providers/Matrix';
import { GameTurnContext } from './Providers/GameTurn';
import { LastPiecePuttedContext } from './Providers/LastPiecePutted';

function App() {
  const { matrix, addToMatrix, cleanMatrix } = useContext(MatrixContext);
  const { gameTurn, togglePlayer } = useContext(GameTurnContext);
  const { updatePiece } = useContext(LastPiecePuttedContext);

  const checkHorizontal = ([x, y]) => {
    let count = 0;

    for (let i = x; i <= 6 && matrix[i][y] === gameTurn; i++) {
      count++;
    }
    for (let i = x - 1; i >= 0 && matrix[i][y] === gameTurn; i--) {
      count++;
    }

    return count >= 4;
  };

  const checkVertical = ([x, y]) => {
    let i = 0;

    while (y + i <= 5 && matrix[x][y + i] === gameTurn) {
      i++;
    }

    return i >= 4;
  };

  const checkMajorDiagonal = ([x, y]) => {
    let i = 0;

    while ((x + i) <= 6 && (y + i) <= 5 && matrix[x + i][y + i] === gameTurn) {
      i++;
    }

    return i >= 4;
  };

  const checkMinorDiagonal = ([x, y]) => {
    let i = 0;

    while ((x - i) >= 0 && (y + i) <= 5 && matrix[x - i][y + i] === gameTurn) {
      i++;
    }

    return i >= 4;
  };

  const checkVictory = (newPiece) => (
    checkHorizontal(newPiece)
    || checkVertical(newPiece)
    || checkMajorDiagonal(newPiece)
    || checkMinorDiagonal(newPiece)
  );

  const selectColumn = (idx) => {
    const lastZero = matrix[idx].lastIndexOf(0);

    if (lastZero === -1) {
      return;
    }

    const newPiece = [idx, lastZero];

    addToMatrix(gameTurn, newPiece);
    updatePiece(newPiece);

    if (checkVictory(newPiece)) {
      toast.success(`${gameTurn === 1 ? 'Light' : 'Dark'} Player WON !!!`);
      cleanMatrix();
    }

    togglePlayer();

    if (matrix.every((column) => column[0])) {
      toast.warning('It\'s a TIE');
      cleanMatrix();
    }
  };

  return (
    <div className="App">
      <ToastContainer />
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
