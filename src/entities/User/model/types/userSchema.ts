import { UserRole } from '../consts';
import { FeaturesFlag } from '@/shared/types/featuresFlag';

interface User {
  id: string;

  username: string;

  avatar?: string;

  roles?: UserRole[];

  features?: FeaturesFlag;
}

interface UserSchema {
  authData?: User;

  _inited: boolean;
}

export type { User, UserSchema };
