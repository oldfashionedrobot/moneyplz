const BASE_URL = String(process.env.REACT_APP_BASE_URL);

const sharedOptions = {
  mode: 'cors',
  headers: {
    'content-type': 'application/json;charset=utf-8'
  }
} as Partial<RequestInit>;

const api = {
  post: async (body: Record<string, any>) => {
    const resp = await fetch(BASE_URL, {
      ...sharedOptions,
      method: 'POST',
      body: JSON.stringify(body)
    });

    return await resp.json();
  },
  get: async (params: Record<string, any>) => {
    const paramsObj = new URLSearchParams(params);

    const resp = await fetch(`${BASE_URL}?${paramsObj}`, {
      ...sharedOptions,
      method: 'GET'
    });

    return await resp.json();
  }
};

export default api;
