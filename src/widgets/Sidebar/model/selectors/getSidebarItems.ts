import { createSelector } from '@reduxjs/toolkit';

import { getUserAuthData } from '@/entities/User';
import {
  getRouteAbout,
  getRouteArticles,
  getRouteMain,
  getRouteProfile
} from '@/shared/const/router';

import { SidebarItemType } from '../types/sidebar';

import AboutIcon from '@/shared/assets/icons/about.svg';
import ArticleIcon from '@/shared/assets/icons/article.svg';
import HomeIcon from '@/shared/assets/icons/home.svg';
import ProfileIcon from '@/shared/assets/icons/profile.svg';

export const getSidebarItems = createSelector(getUserAuthData, (userData) => {
  const sidebarItemsList: SidebarItemType[] = [
    {
      path: getRouteMain(),
      Icon: HomeIcon,
      text: 'Главная'
    },
    {
      path: getRouteAbout(),
      Icon: AboutIcon,
      text: 'О сайте'
    }
  ];

  if (userData) {
    sidebarItemsList.push(
      {
        path: getRouteProfile(userData.id),
        Icon: ProfileIcon,
        text: 'Профиль',
        authOnly: true
      },
      {
        path: getRouteArticles(),
        Icon: ArticleIcon,
        text: 'Статьи',
        authOnly: true
      }
    );
  }

  return sidebarItemsList;
});
