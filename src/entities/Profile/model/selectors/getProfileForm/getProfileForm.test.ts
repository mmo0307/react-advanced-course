import { StateSchema } from 'app/providers/StoreProvider';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { getProfileForm } from 'entities/Profile';

describe('getProfileForm.test', () => {
  test('should return error', () => {
    const data = {
      username: 'Misha37',
      age: 22,
      country: Country.Ukraine,
      lastName: 'Mishin',
      firstName: 'Misha',
      city: 'asf',
      currency: Currency.USD
    };

    const state: DeepPartial<StateSchema> = {
      profile: {
        form: data
      }
    };

    expect(getProfileForm(state as StateSchema)).toEqual(data);
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getProfileForm(state as StateSchema)).toEqual(undefined);
  });
});
