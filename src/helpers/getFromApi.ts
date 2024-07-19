const getApi = async (url: RequestInfo, params = '', headers = '') => {
  const resp = await fetch(url);
  const { results } = await resp.json();
  return results;
}

export default getApi;
