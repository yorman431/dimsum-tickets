export const getEndpoint = (str = '', separator = '/') => {
  const arr = str.split(separator);
  return arr[arr.length - 1];
};

export const getBasepoint = (str = '', separator = '/') => {
  return str.split(separator)[0];
};
