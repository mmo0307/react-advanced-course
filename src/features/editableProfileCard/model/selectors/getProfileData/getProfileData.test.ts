import { StateSchema } from '@/app/providers/StoreProvider';
import { Index } from '@/entities/Country';
import { Currency } from '@/entities/Currency';

import { getProfileData } from '../getProfileData/getProfileData';

describe('getProfileData.test', () => {
  test('should return error', () => {
    const data = {
      username: 'admin',
      age: '22',
      country: Index.Ukraine,
      lastName: 'Blog tv',
      firstName: 'asd',
      city: 'asf',
      currency: Currency.USD
    };

    const state: DeepPartial<StateSchema> = {
      profile: {
        data
      }
    };

    expect(getProfileData(state as StateSchema)).toEqual(data);
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getProfileData(state as StateSchema)).toEqual(undefined);
  });
});
