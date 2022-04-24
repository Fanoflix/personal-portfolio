import axios from "axios";

const BASE_URL = "http://localhost:5000/";
// const DEFAULT_HEADERS = { "Content-Type": "application/json" };

// function getHeaders() {}

const processRequest = (uri: string, method: string, data: unknown) => {
  const url = BASE_URL + uri;
  if (method.toLowerCase() === "post") {
    return axios.post(url, { data });
  } else if (method.toLowerCase() === "put") {
    return axios.put(url, { data });
  } else if (method.toLowerCase() === "get") {
    return axios.get(url);
  } else if (method.toLowerCase() === "delete") {
    return axios.delete(url);
  }
};

export default processRequest;
