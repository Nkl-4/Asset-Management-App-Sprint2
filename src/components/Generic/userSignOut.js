export default function userSignOut() {
  localStorage.clear();
  return (window.location.href = '/');
}
