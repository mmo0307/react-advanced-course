import { UserRole } from '../consts';

interface User {
  id: string;

  username: string;

  avatar?: string;

  roles?: UserRole[];
}

interface UserSchema {
  authData?: User;

  _inited: boolean;
}

export type { User, UserSchema };
