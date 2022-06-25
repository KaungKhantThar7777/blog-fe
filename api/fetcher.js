import useSWR from "swr";
import { API_URL } from "utils/constants";

export const fetcher = (...args) =>
  fetch(...args, {
    credentials: "include",
  }).then((res) => res.json());

export const useIsLoggedIn = () => {
  return useSWR(`${API_URL}/isLoggedIn`, fetcher);
};
