import React, { Suspense, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { AppRouter } from './providers/router';
import { getUserInited } from '@/entities/User';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { View } from '@/shared/ui/View';
import { Navbar } from '@/widgets/Navbar';
import { Sidebar } from '@/widgets/Sidebar';
import { useTheme } from '@/shared/lib/hooks/useTheme';

import './styles/index.scss';
import { initAuthData } from '@/entities/User';
import { PageLoader } from '@/widgets/PageLoader';

function App() {
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
        <div className={classNames('app', {}, [theme])}>
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
      </View.Condition>
    </>
  );
}

export default App;
