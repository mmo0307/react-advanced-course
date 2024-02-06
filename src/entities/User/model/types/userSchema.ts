interface User {
  id: string;

  username: string;
}

interface UserSchema {
  authData?: User;

  _inited: boolean;
}

export { User, UserSchema };
