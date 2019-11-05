import { useAuth0 } from '../lib/auth';

export default function useAuth() {
  let auth = {
    isAuthenticated: null,
    loginWithRedirect: null,
    loading: null,
    user: {},
  };
  const { isAuthenticated, loginWithRedirect, loading, user } = useAuth0();
  auth.isAuthenticated = isAuthenticated;
  auth.loginWithRedirect = loginWithRedirect;
  auth.loading = loading;
  auth.user = user;

  console.log(auth.user);

  return auth;
}
