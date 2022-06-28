/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/prop-types */
import React, { createContext, useState } from 'react';

const MatrixContext = createContext();

function MatrixProvider({ children }) {
  const defaultState = Array.from({ length: 7 }, () => [0, 0, 0, 0, 0, 0]);

  const [matrix, setMatrix] = useState(JSON.parse(JSON.stringify(defaultState)));

  const cleanMatrix = () => {
    setMatrix(defaultState);
  };

  const addToMatrix = (value, [x, y]) => {
    const newMatrix = matrix;

    newMatrix[x][y] = value;

    setMatrix(newMatrix);
  };

  return (
    <MatrixContext.Provider value={{ matrix, addToMatrix, cleanMatrix }}>
      {children}
    </MatrixContext.Provider>
  );
}

export { MatrixContext, MatrixProvider };
