import axios from "axios";

export const Get = async (url) => {
  return await axios.get(url);
};

export const Post =async (url, body) => {
  return await axios.post(url, body);
};

export const Patch = () => {};

export const Delete = () => {};
