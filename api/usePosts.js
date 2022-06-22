import useSWR from "swr";
import { API_URL } from "../utils/constants";
import { fetcher } from "./fetcher";

export const usePosts = ({ limit = 0, tag = "" } = {}) => {
  return useSWR(`${API_URL}/posts?limit=${limit}&tag=${tag}`, fetcher);
};
