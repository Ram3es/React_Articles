import axios from "axios";

const api = axios.create({
  baseUrl: "http://localhost:4001/api",
});

export const fetchArticles = () => {
  return new Promise((resolve, reject) => {
    const URL = "/articles";
    return api
      .get(URL)
      .then((response) => resolve(response.data))
      .catch((err) => reject(err))
      .finally(() => {
        // to do
      });
  });
};
