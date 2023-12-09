import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routerConfig/routerConfig';
import { Loader } from 'shared/ui/Loader';

function AppRouter() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        {Object.values(routeConfig).map(({ element, path }) => (
          <Route
            key={path}
            element={<div className='page-wrapper'>{element}</div>}
            path={path}
          />
        ))}
      </Routes>
    </Suspense>
  );
}

export { AppRouter };
