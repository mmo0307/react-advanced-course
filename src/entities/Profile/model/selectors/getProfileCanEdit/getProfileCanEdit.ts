import { createSelector } from '@reduxjs/toolkit';
import { getProfileData } from 'entities/Profile';
import { getUserAuthData } from 'entities/User';

export const getProfileCanEdit = createSelector(
  getUserAuthData,
  getProfileData,
  (user, profile) => user?.id === profile?.id
);
