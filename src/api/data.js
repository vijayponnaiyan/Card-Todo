import baseAPI from "./baseAPI";

export const fetchcard = async () => {
  try {
    const data = await baseAPI.get("/blogs");
    return data;
  } catch (error) {
    throw new Error(error);
  }
};
