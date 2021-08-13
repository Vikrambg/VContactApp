/* eslint-disable prettier/prettier */
//import {DEV_BACKEND_URL, PROD_BACKEND_URL} from 'env';

const DEV_BACKEND_URL = 'http://truly-contacts.herokuapp.com/api/';
const PROD_BACKEND_URL = 'http://truly-contacts.herokuapp.com/api/';

const devEnvironmentVariables = {
  DEV_BACKEND_URL,
};

const prodEnvironmentVariables = {
  PROD_BACKEND_URL,
};

export default __DEV__ ? devEnvironmentVariables : prodEnvironmentVariables;
