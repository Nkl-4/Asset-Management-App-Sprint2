import { Redirect } from 'react-router';

export default function userSignOut() {
  localStorage.clear();
  return <Redirect to="/" />;
}
