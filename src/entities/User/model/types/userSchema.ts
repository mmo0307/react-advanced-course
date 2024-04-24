export enum UserRole {
  ADMIN = 'ADMIN',
  USER = 'USER',
  MANAGER = 'MANAGER'
}

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

export { User, UserSchema };
