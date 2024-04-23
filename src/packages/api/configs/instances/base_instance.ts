import { ROUTES } from '@/packages/routes';
import { baseURL, postAuthRefresh } from '@api';
import axios from 'axios';
import Cookies from 'js-cookie';
export const BASE_INSTANCE = axios.create({
  baseURL,
  headers: {
    Accept: 'application/json',
  },
});
BASE_INSTANCE.defaults.headers['Authorization'] =
  `Bearer ${Cookies.get('accessToken')}`;
BASE_INSTANCE.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const {
      config,
      response: { status },
    } = error;

    if (status === 401) {
      return postAuthRefresh()
        .then((res) => {
          if (res.data.token) {
            Cookies.set('accessToken', res.data.token);
            // Retry the failed request here
            return BASE_INSTANCE(config); // Retry the failed request
          } else {
            window.location.assign(ROUTES.AUTH.REGISTER);
            return Promise.reject(error);
          }
        })
        .catch((err) => {
          window.location.assign(ROUTES.AUTH.REGISTER);
          return Promise.reject(error);
        });
    }

    return Promise.reject(error);
  }
);
