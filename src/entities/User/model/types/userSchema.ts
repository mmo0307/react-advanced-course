interface User {
  id: string;
  username: string;
}

interface UserSchema {
  authData?: User;
}

export { User, UserSchema };
