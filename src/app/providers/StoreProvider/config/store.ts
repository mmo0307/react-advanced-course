import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { userReducer } from 'entities/User';
import { loginReducer } from 'feature/AuthByUserName';

import { StateSchema } from './StateSchema';

function createReduxStore(initialState?: StateSchema) {
  const reducer: ReducersMapObject<StateSchema> = {
    user: userReducer,
    loginForm: loginReducer
  };

  return configureStore<StateSchema>({
    reducer,
    devTools: __IS_DEV__,
    preloadedState: initialState
  });
}

export { createReduxStore };
