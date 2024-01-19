import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { createReducerManager } from 'app/providers/StoreProvider/config/reducerManager';
import { userReducer } from 'entities/User';
import { loginReducer } from 'feature/AuthByUserName';

import { StateSchema } from './StateSchema';

function createReduxStore(
  initialState?: StateSchema,
  asyncReducers?: ReducersMapObject<StateSchema>
  //navigate?: (to: To, options?: NavigateOptions) => void
) {
  const reducer: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    user: userReducer,
    loginForm: loginReducer
  };

  const reducerMaganer = createReducerManager(reducer);

  const store = configureStore<StateSchema>({
    reducer: reducerMaganer.reduce,
    devTools: __IS_DEV__,
    preloadedState: initialState
  });

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  store.reducerManager = reducerMaganer;

  return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];

export { createReduxStore };
