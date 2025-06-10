import { BASE_URL } from "./constants";
export const getFormatedUrl = (url) => {
  const prodUrl = `${BASE_URL}${url}`;
  const newUrl = import.meta.env.DEV ? url : prodUrl;
  return newUrl;
};
