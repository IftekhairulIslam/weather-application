
import axios from 'axios';
import { BASE_URL } from '../../configuration/config';
import ErrorResponse from '../../model/ErrorResponse';

const baseURL = BASE_URL;
const instance = axios.create({ baseURL });

instance.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(new ErrorResponse(error.response.data)),
);

const httpService = {
  get: instance.get,
  post: instance.post,
  put: instance.put,
  patch: instance.patch,
  delete: instance.delete,
};

export default httpService;

