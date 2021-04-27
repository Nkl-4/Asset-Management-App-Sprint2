export default function userSignOut() {
  // clear local storage and redirect page
  localStorage.clear();
  return (window.location.href = '/');
}
