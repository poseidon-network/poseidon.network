const checkExpire = () => {
  const userExpiredAt = window.localStorage.getItem('userExpiredAt');
  if (userExpiredAt && new Date(userExpiredAt).getTime() < Date.now()) {
    clearLoginData();
  }
};

export const getUser = () => {
  checkExpire();
  const payload = window.localStorage.getItem('user');
  return payload ? JSON.parse(payload) : {};
};

export const saveLoginData = async (data: any) => {
  window.localStorage.setItem('authToken', data.token);
  window.localStorage.setItem('user', JSON.stringify({
    ...data,
    isLogin: true,
  }));

  // expire time
  const userExpiredAt = new Date();
  userExpiredAt.setDate(userExpiredAt.getDate() + 30);
  window.localStorage.setItem('userExpiredAt', userExpiredAt.toISOString());
  window.location.reload();
};

export const clearLoginData = () => {
  window.localStorage.removeItem('user');
  window.localStorage.removeItem('userExpiredAt');
  window.localStorage.removeItem('authToken');
};

export const logout = () => {
  clearLoginData();
  window.location.reload();
};
