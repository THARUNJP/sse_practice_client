import api from "../clientAPi";

export const get = async (cursor: number = 0, limit: number = 10) => {
  const response = await api.get("/items", {
    params: { cursor, limit },
  });
  return response.data;
};
