export const setAccessToken = (token: string) => {
  return localStorage.setItem('access-token', token);
};

export const getAccessToken = () => {
  return localStorage.getItem('access-token');
};
