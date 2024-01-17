import { UserSchema } from 'entities/User';
import { LoginSchema } from 'feature/AuthByUserName';

export interface StateSchema {
  user: UserSchema;

  loginForm?: LoginSchema;
}
