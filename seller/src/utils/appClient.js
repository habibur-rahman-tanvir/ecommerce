import { baseUrl } from "../config/config";

let isRefreshing = false;
let refreshQueue = [];

const refreshToken = async () => {
  if (isRefreshing) {
    return new Promise((resolve) => {
      refreshQueue.push(resolve);
    });
  }
  isRefreshing = true;
  console.log("Refreshing....");
  const res = await fetch(`${baseUrl}/api/seller/auth/refresh`, {
    method: "POST",
    credentials: "include",
  });
  isRefreshing = false;
  if (res.status !== 200) {
    refreshQueue.forEach((resolve) => resolve(null));
    refreshQueue = [];
    return null;
  }
  const data = await res.json();
  refreshQueue.forEach((resolve) => resolve(data.jwt));
  refreshQueue = [];
  return data.jwt;
};

const fetchData = async (url, options = {}) => {
  const sendRequest = async () => {
    return fetch(url, {
      ...options,
    });
  };
  let res = await sendRequest();
  if (res.status === 401) {
    console.warn("Access token expired… trying refresh.");
    const token = await refreshToken();
    if (token) {
      res = await sendRequest();
    } else {
      window.dispatchEvent(new CustomEvent("auth:unauthorized"));
    }
  }
  return res;
};

export default fetchData;
