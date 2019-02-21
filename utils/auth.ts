import axios from 'axios';
import { ReactFacebookLoginInfo } from 'react-facebook-login';

export const recoveryAuth = () => {
  const tokenExpiredAt = window.localStorage.getItem('tokenExpiredAt');
  if (tokenExpiredAt && new Date(tokenExpiredAt).getTime() < Date.now()) {
    window.localStorage.removeItem('authToken');
    window.localStorage.removeItem('tokenExpiredAt');
  }
};

export const getToken = () => window.localStorage.getItem('authToken');

export const login = async ({ accessToken }: ReactFacebookLoginInfo) => {
  const { data: { data } } = await axios.post(`${process.env.GRAPHQL_URI}`, {
    operationName:null,
    variables:{},
    query: `mutation {  socialLogin(service: "facebook", accessToken: "${accessToken}") { token } }`,
  });
  if (data.socialLogin) {
    window.localStorage.setItem('authToken', data.socialLogin.token);
    const tokenExpiredAt = new Date();
    tokenExpiredAt.setDate(tokenExpiredAt.getDate() + 30);
    window.localStorage.setItem('tokenExpiredAt', tokenExpiredAt.toISOString());
    window.location.reload();
  }
};
