const convertToQueryParams = (params = {}) => {
  let queryString = '';
  Object.keys(params).forEach((key, index) => {
    if (index === 0) queryString += `?${key}=${params[key]}`;
    else queryString += `&${key}=${params[key]}`;
  });
  return queryString;
};

export const GET = (url = '', params = {}, token = 'x') => {
  return new Promise((resolve, reject) => {
    const lang = localStorage.getItem('i18nextLng');
    fetch(url + convertToQueryParams(params), {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Accept-Language': lang,
        'X-Auth-Token': token
      },
    })
      .then((response) => {
        resolve(response.json());
      })
      .catch((err) => {
        reject(new Error(err.message));
      });
  });
};

export const POST = (url = '', data = {}, token = 'x') => {
  return new Promise((resolve, reject) => {
    const lang = localStorage.getItem('i18nextLng');
    const options = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Accept-Language': lang,
        'X-Auth-Token': token
      },
      body: JSON.stringify(data),
    };

    fetch(url, options)
      .then((response) => {
        resolve(response.json());
      })
      .catch((err) => {
        reject(new Error(err.message));
      });
  });
};

export const PUT = async (url = '', data = {}, token = 'x') => {
  return new Promise((resolve, reject) => {
    const lang = localStorage.getItem('i18nextLng');
    const options = {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Accept-Language': lang,
        'X-Auth-Token': token
      },
      body: JSON.stringify(data),
    };
    fetch(url, options)
      .then((response) => {
        resolve(response.json());
      })
      .catch((err) => {
        reject(new Error(err.message));
      });
  });
};
