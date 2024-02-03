import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';

export interface Profile {
  firstName: string;

  lastName: string;

  age: number;

  currency: Currency;

  country: Country;

  city: string;

  username: string;

  avatar: string;
}

export interface ProfileSchema {
  data?: Profile;

  error?: string;

  isLoading: boolean;

  readonly: boolean;
}
