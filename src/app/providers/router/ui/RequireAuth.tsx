import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { getUserAuthData, getUserRoles } from 'entities/User';
import { RoutePath } from 'shared/config/routerConfig/routerConfig';
import { UserRole } from 'entities/User/model/types/userSchema';
import { useMemo } from 'react';

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
    return <Navigate to={RoutePath.main} state={{ from: location }} replace />;
  }

  if (!hasRequiredRole) {
    return (
      <Navigate to={RoutePath.forbidden} state={{ from: location }} replace />
    );
  }

  return children;
}
