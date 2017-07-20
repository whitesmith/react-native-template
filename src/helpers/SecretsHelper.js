import * as Keychain from 'react-native-keychain';

export const setSecrets = (email, authToken, userId) => {
  const credentials = {
    auth_token: authToken,
    user_id: userId
  };
  Keychain
    .setGenericPassword(email, JSON.stringify(credentials));
};

export const getSecrets = () => {
  return (
    Keychain
      .getGenericPassword()
      .then((credentials) => getCredentialsFromJson(credentials))
  );  
};

export const resetSecrets = () => {
  return (
    Keychain
      .resetGenericPassword()
  );
};

const getCredentialsFromJson = (credentials) => {
  if (credentials.password == null) {
    return undefined;
  }

  const obj = JSON.parse(credentials.password);
  return {
    email: credentials.username,
    auth_token: obj.auth_token,
    user_id: obj.user_id
  };
};
