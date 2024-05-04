export { getUserAuthData } from './model/selectors/getUserAuthData/getUserAuthData';
export { getUserInited } from './model/selectors/getUserInited/getUserInited';
export {
  getUserRoles,
  isUserAdmin,
  isUserManager
} from './model/selectors/getUserRoles/getUserRoles';
export { userActions, userReducer } from './model/slice/userSlice';
export type { User, UserSchema } from './model/types/userSchema';
export { UserRole } from './model/consts';
export { initAuthData } from './model/service/initAuthData';

export { useJsonSettings } from './model/selectors/getJsonSettings/getJsonSettings';

export { saveJsonSettings } from './model/service/saveJsonSettings';
