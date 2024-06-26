import axios, { AxiosStatic } from 'axios';
import { AsyncThunkAction } from '@reduxjs/toolkit';

import { StateSchema } from '@/app/providers/StoreProvider';

type DispatchType<T> = jest.MockedFunction<(action: T) => void>;
type NavigateType = jest.MockedFunction<(destination: string) => void>;

type ActionCreatorType<Return, Arg, RejectedValue> = (
  arg: Arg
) => AsyncThunkAction<Return, Arg, { rejectValue: RejectedValue }>;

jest.mock('axios');

const mockedAxios: jest.MockedFunctionDeep<AxiosStatic> = jest.mocked(axios, {
  shallow: false
});

export class TestAsyncThunk<Return, Arg, RejectedValue> {
  dispatch: DispatchType<
    AsyncThunkAction<Return, Arg, { rejectValue: RejectedValue }>
  >;

  getState: () => StateSchema;

  actionCreator: ActionCreatorType<Return, Arg, RejectedValue>;

  api: jest.MockedFunctionDeep<AxiosStatic>;

  navigate: NavigateType;

  constructor(
    actionCreator: ActionCreatorType<Return, Arg, RejectedValue>,
    state?: DeepPartial<StateSchema>
  ) {
    this.actionCreator = actionCreator;
    this.dispatch = jest.fn();
    this.getState = jest.fn(() => state as StateSchema);

    this.api = mockedAxios;
    this.navigate = jest.fn();
  }

  async callThunk(arg: Arg) {
    const action = this.actionCreator(arg);

    const result = await action(this.dispatch, this.getState, {
      api: this.api,
      navigate: this.navigate
    });

    return result;
  }
}
