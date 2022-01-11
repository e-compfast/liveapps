import Constants from 'expo-constants';

const settings = {
  dev: {
    apiUrl: 'https://9000-chocolate-donkey-97ea6rxc.ws-us25.gitpod.io/api',
  },
  staging: {
    apiUrl: 'https://9000-chocolate-donkey-97ea6rxc.ws-us25.gitpod.io/api',
  },
  prod: {
    apiUrl: 'https://9000-chocolate-donkey-97ea6rxc.ws-us25.gitpod.io/api',
  },
};

const getCurrentSettings = () => {
  if (__DEV__) {
    return settings.dev;
  }

  if (Constants.manifest.releaseChannel === 'staging') {
    return settings.staging;
  }

  return settings.prod;
};

export default getCurrentSettings();
