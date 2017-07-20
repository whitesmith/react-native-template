import { getSecrets } from './SecretsHelper';

const BASE_URL = '';
const API_URL = '';

const buildUrlWithPath = (path) => {
  return `${BASE_URL}${API_URL}${path}`;
};

const encodeParams = (params) => {
  let encodedParams = [];
  for (const property in params) {
    const encodedKey = encodeURIComponent(property);
    const encodedValue = encodeURIComponent(params[property]);
    encodedParams.push(`${encodedKey}=${encodedValue}`);
  }
  encodedParams = encodedParams.join('&');
  return encodedParams;
};

const buildAuthParams = (authData) => {
  if (authData != null) {
    return {
      'X-USER-EMAIL': authData.email,
      'X-USER-TOKEN': authData.auth_token,
      'Content-Type': 'application/x-www-form-urlencoded'
    };
  }
};


export const performAuthRequest = (email, password) => { 
  return (
    fetch(buildUrlWithPath('auth'), {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: encodeParams({ email, password })
    })
  );
};

export const get = (path) => {
  return (
    getSecrets()
    .then((authData) =>
      fetch(buildUrlWithPath(path), {
        method: 'GET',
        headers: buildAuthParams(authData)
      })
    )
  );
};

export const put = (path, params) => {
  return (
    getSecrets()
    .then((authData) =>
      fetch(buildUrlWithPath(path), {
        method: 'PUT',
        headers: buildAuthParams(authData),
        body: encodeParams(params)
      })
    )
  );
};

export const post = (path, params) => {
  return (
    getSecrets()
    .then((authData) =>
      fetch(buildUrlWithPath(path), {
        method: 'POST',
        headers: buildAuthParams(authData),
        body: encodeParams(params)
      })
    )
  );
};

export const handleResponse = (dispatch, response, onSuccess, onFailure) => {
  if (response.status >= 200 && response.status < 300) {
    response.json()
    .then((responseJson) => {
      return onSuccess(dispatch, responseJson);
    })
    .catch((error) => {
      console.error(error);
      return onFailure(dispatch);
    });
  } else {
    console.log(dispatch);
    return onFailure(dispatch);
  }
};
