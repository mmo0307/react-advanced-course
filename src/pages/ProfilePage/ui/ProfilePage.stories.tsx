import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { ProfilePage } from 'pages/ProfilePage';
import avatar from 'shared/assets/tests/avatar.jpg';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

const meta = {
  title: 'page/ProfilePage',
  component: ProfilePage
} satisfies Meta<typeof ProfilePage>;

type Story = StoryObj<typeof ProfilePage>;

export default meta;

export const Profile: Story = {
  args: {},
  decorators: [
    ThemeDecorator(Theme.LIGHT),
    StoreDecorator({
      profile: {
        form: {
          username: 'admin',
          age: 22,
          country: Country.Ukraine,
          lastName: 'Mishin',
          firstName: 'Misha',
          city: 'asf',
          currency: Currency.USD,
          avatar
        }
      }
    })
  ]
};

export const Profile_DARK: Story = {
  ...Profile,
  decorators: [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
      profile: {
        form: {
          username: 'admin',
          age: 22,
          country: Country.Ukraine,
          lastName: 'Mishin',
          firstName: 'Misha',
          city: 'asf',
          currency: Currency.USD,
          avatar
        }
      }
    })
  ]
};
