import React, { FC, useReducer, useMemo } from 'react';
import { UserContext, reducer, initState } from '../../Context';
import Main from '../Main';

const App:FC = () => {
  const [user, dispatch] = useReducer(reducer, initState);
  const contextVal = useMemo(() => {
    return { user, dispatch };
  }, [user, dispatch]);

  return (
    <UserContext.Provider value={contextVal}>
      <Main />
    </UserContext.Provider>
  )
}

export default App;
