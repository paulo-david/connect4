/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/prop-types */

import React, { createContext, useState } from 'react';

const LastPiecePuttedContext = createContext();

function LastPiecePuttedProvider({ children }) {
  const defaultState = [0, 0];

  const [lastPiecePutted, setLastPiecePutted] = useState(defaultState);

  const updatePiece = (lastPiecePosition) => {
    setLastPiecePutted(lastPiecePosition);
  };

  return (
    <LastPiecePuttedContext.Provider value={{ lastPiecePutted, updatePiece }}>
      {children}
    </LastPiecePuttedContext.Provider>
  );
}

export { LastPiecePuttedContext, LastPiecePuttedProvider };
