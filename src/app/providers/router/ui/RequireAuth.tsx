import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';
import { useLocation, Navigate } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { ReactNode } from 'react';

export function RequireAuth({ children }: {children: JSX.Element}) {
  const isAuth = useSelector((getUserAuthData));
  const location = useLocation();

  if (!isAuth) {
    return <Navigate to={RoutePath.main} state={{ from: location }} replace />;
  }

  return children;
}
