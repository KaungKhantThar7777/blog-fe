import { useSWRConfig } from "swr";
import { API_URL } from "utils/constants";

export const useMutation = (path) => {
  const { mutate } = useSWRConfig();
  const mutateData = async ({
    data = {},
    method = "POST",
    validateUrl = `${API_URL}/posts`,
  } = {}) => {
    const res = await fetch(`${API_URL}${path}`, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(data),
    }).then((res) => res.json());

    mutate(validateUrl);
    return res;
  };

  return mutateData;
};
