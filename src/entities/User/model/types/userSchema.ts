import { UserRole } from '../consts';
import { FeatureFlags } from '@/shared/types/featuresFlag';
import { JsonSettings } from './jsonSettings';

interface User {
  id: string;

  username: string;

  avatar?: string;

  roles?: UserRole[];

  features?: FeatureFlags;

  jsonSettings?: JsonSettings;
}

interface UserSchema {
  authData?: User;

  _inited: boolean;
}

export type { User, UserSchema };
