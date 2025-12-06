import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.rawg.io/api/",
  params: {
    key: "fb7779f5aad84af398ec3800e1b72959",
  },
});
