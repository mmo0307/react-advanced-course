import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from 'entities/User';
import AboutIcon from 'shared/assets/icons/about.svg';
import ArticleIcon from 'shared/assets/icons/article.svg';
import HomeIcon from 'shared/assets/icons/home.svg';
import ProfileIcon from 'shared/assets/icons/profile.svg';
import { RoutePath } from 'shared/config/routerConfig/routerConfig';

import { SidebarItemType } from '../types/sidebar';

export const getSidebarItems = createSelector(getUserAuthData, userData => {
  const sidebarItemsList: SidebarItemType[] = [
    {
      path: RoutePath.main,
      Icon: HomeIcon,
      text: 'Главная'
    },
    {
      path: RoutePath.about,
      Icon: AboutIcon,
      text: 'О сайте'
    }
  ];

  if (userData) {
    sidebarItemsList.push(
      {
        path: `${RoutePath.profile}/${userData.id}`,
        Icon: ProfileIcon,
        text: 'Профиль',
        authOnly: true
      },
      {
        path: RoutePath.articles,
        Icon: ArticleIcon,
        text: 'Статьи',
        authOnly: true
      }
    );
  }

  return sidebarItemsList;
});
