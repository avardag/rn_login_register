import {DEV_API_URL, PROD_API_URL} from '@env';

const devEnvVars = {DEV_API_URL};

const prodEnvVars = {PROD_API_URL};

export default __DEV__ ? devEnvVars : prodEnvVars;
