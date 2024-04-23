import { screen } from '@testing-library/react';
import { componentRender } from 'shared/lib/test/componentRender/componentRender';

import { EditableProfileCard } from './EditableProfileCard';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { Profile } from 'entities/Profile';
import { profileReducer } from '../../model/slice/profileSlice';
import userEvent from '@testing-library/user-event';
import { $api } from 'shared/api/api';

const profile: Profile = {
  id: '1',
  firstName: 'admin',
  lastName: 'admin',
  age: 20,
  currency: Currency.USD,
  country: Country.Ukraine,
  city: 'Kyiv',
  username: 'admin'
};

const options = {
  initialState: {
    profile: {
      form: profile,
      data: profile,
      readonly: true
    },
    user: {
      authData: {
        id: '1'
      }
    }
  },
  asyncReducers: {
    profile: profileReducer
  }
};

describe('EditableProfileCard', () => {
  test('render EditableProfileCard', async () => {
    componentRender(<EditableProfileCard id='1' />, options);

    await userEvent.click(
      screen.getByTestId('EditableProfileCardHeader.EditButton')
    );

    expect(
      screen.getByTestId('EditableProfileCardHeader.CancelButton')
    ).toBeInTheDocument();
  });

  test('fill value in input and check  values', async () => {
    componentRender(<EditableProfileCard id='1' />, options);

    await userEvent.click(
      screen.getByTestId('EditableProfileCardHeader.EditButton')
    );

    await userEvent.clear(screen.getByTestId('ProfileCard.firstName'));
    await userEvent.clear(screen.getByTestId('ProfileCard.lastName'));

    await userEvent.type(screen.getByTestId('ProfileCard.firstName'), 'user');
    await userEvent.type(screen.getByTestId('ProfileCard.lastName'), 'user');

    expect(screen.getByTestId('ProfileCard.firstName')).toHaveValue('user');
    expect(screen.getByTestId('ProfileCard.lastName')).toHaveValue('user');

    await userEvent.click(
      screen.getByTestId('EditableProfileCardHeader.CancelButton')
    );

    expect(screen.getByTestId('ProfileCard.firstName')).toHaveValue('admin');
    expect(screen.getByTestId('ProfileCard.lastName')).toHaveValue('admin');
  });

  test('error', async () => {
    componentRender(<EditableProfileCard id='1' />, options);

    await userEvent.click(
      screen.getByTestId('EditableProfileCardHeader.EditButton')
    );

    await userEvent.clear(screen.getByTestId('ProfileCard.firstName'));

    await userEvent.click(
      screen.getByTestId('EditableProfileCardHeader.SaveButton')
    );

    expect(
      screen.getByTestId('EditableProfileCard.Error.Paragraph')
    ).toBeInTheDocument();
  });

  test('haven`t errors in form and send PUT call', async () => {
    const mockPutReq = jest.spyOn($api, 'put');

    componentRender(<EditableProfileCard id='1' />, options);

    await userEvent.click(
      screen.getByTestId('EditableProfileCardHeader.EditButton')
    );

    await userEvent.type(screen.getByTestId('ProfileCard.firstName'), 'user');

    await userEvent.click(
      screen.getByTestId('EditableProfileCardHeader.SaveButton')
    );

    expect(mockPutReq).toHaveBeenCalled();
  });
});
