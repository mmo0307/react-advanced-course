import React, { memo, Suspense, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { getUserInited, initAuthData } from '@/entities/User';
import { MainLayout } from '@/shared/layouts';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeature } from '@/shared/lib/features';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { useTheme } from '@/shared/lib/hooks/useTheme';
import { View } from '@/shared/ui/redesigned/View';
import { Navbar } from '@/widgets/Navbar';
import { PageLoader } from '@/widgets/PageLoader';
import { Sidebar } from '@/widgets/Sidebar';

import { AppRouter } from './providers/router';
import { withTheme } from './providers/ThemeProvider/ui/withTheme';

import './styles/index.scss';

const App = memo(() => {
  const { theme } = useTheme();

  const dispatch = useAppDispatch();

  const inited = useSelector(getUserInited);

  useEffect(() => {
    dispatch(initAuthData());
  }, [dispatch]);

  return (
    <>
      <View.Condition if={!inited}>
        <PageLoader />
      </View.Condition>

      <View.Condition if={inited}>
        <ToggleFeature
          name='isAppRedesigned'
          off={
            <div
              id={'app'}
              className={classNames('app', {}, [theme])}
            >
              <Suspense fallback=''>
                <Navbar />

                <div className='content-page'>
                  <Sidebar />

                  <View.Condition if={inited}>
                    <AppRouter />
                  </View.Condition>
                </div>
              </Suspense>
            </div>
          }
          on={
            <div
              id={'app'}
              className={classNames('app_redesigned', {}, [theme])}
            >
              <Suspense fallback=''>
                <MainLayout
                  header={<Navbar />}
                  content={<AppRouter />}
                  sidebar={<Sidebar />}
                  toolbar={<div>{'test-toolbar'}</div>}
                />
              </Suspense>
            </div>
          }
        />
      </View.Condition>
    </>
  );
});

export default withTheme(App);
