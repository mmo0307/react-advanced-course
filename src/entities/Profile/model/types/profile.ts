import { Index } from '@/entities/Country';
import { Currency } from '@/entities/Currency';

export interface Profile {
  id?: string;

  firstName?: string;

  lastName?: string;

  age?: string;

  currency?: Currency;

  country?: Index;

  city?: string;

  username?: string;

  avatar?: string;
}
