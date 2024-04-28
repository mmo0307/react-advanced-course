import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { getUserAuthData, getUserRoles } from '@/entities/User';
import { UserRole } from '@/entities/User';
import { useMemo } from 'react';
import { getRouteForbidden, getRouteMain } from '@/shared/const/router';

interface RequireAuthProps {
  children: JSX.Element;
  roles?: UserRole[];
}

export function RequireAuth({ children, roles }: RequireAuthProps) {
  const auth = useSelector(getUserAuthData);

  const userRoles = useSelector(getUserRoles);

  const location = useLocation();

  const hasRequiredRole = useMemo(() => {
    if (!roles) return true;

    return roles.some(role => userRoles?.includes(role));
  }, [userRoles, roles]);

  if (!auth) {
    return <Navigate to={getRouteMain()} state={{ from: location }} replace />;
  }

  if (!hasRequiredRole) {
    return (
      <Navigate to={getRouteForbidden()} state={{ from: location }} replace />
    );
  }

  return children;
}
