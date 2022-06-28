/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/prop-types */

import React, { createContext, useState } from 'react';

const GameTurnContext = createContext();

function GameTurnProvider({ children }) {
  const defaultState = 1;

  const [gameTurn, setGameTurn] = useState(defaultState);

  const togglePlayer = () => {
    setGameTurn(gameTurn === 1 ? 2 : 1);
  };

  return (
    <GameTurnContext.Provider value={{ gameTurn, togglePlayer }}>
      {children}
    </GameTurnContext.Provider>
  );
}

export { GameTurnContext, GameTurnProvider };
