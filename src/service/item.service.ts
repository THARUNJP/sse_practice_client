import api from "../clientAPi";

export const getItems = async (page: number = 1, limit: number = 10) => {
  const response = await api.get("/items", {
    params: { page, limit },
  });
  return response.data;
};
