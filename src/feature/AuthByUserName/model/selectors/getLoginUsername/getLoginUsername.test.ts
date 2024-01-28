import { StateSchema } from 'app/providers/StoreProvider';
import { DeepPartial } from 'shared/lib/types/DeepPartial';

import { getLoginUsername } from './getLoginUsername';

describe('getLoginError.test', () => {
  test('should return true', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        username: '123'
      }
    };

    expect(getLoginUsername(state as StateSchema)).toEqual('123');
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getLoginUsername(state as StateSchema)).toEqual('');
  });
});
