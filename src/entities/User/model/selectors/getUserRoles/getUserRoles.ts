import { createSelector } from '@reduxjs/toolkit';

import { StateSchema } from '@/app/providers/StoreProvider';

import { UserRole } from '../../consts';

const getUserRoles = (state: StateSchema) => state.user.authData?.roles;

const isUserAdmin = createSelector(getUserRoles, (roles) =>
  Boolean(roles?.includes(UserRole.ADMIN))
);

const isUserManager = createSelector(getUserRoles, (roles) =>
  Boolean(roles?.includes(UserRole.MANAGER))
);

export { getUserRoles, isUserAdmin, isUserManager };
