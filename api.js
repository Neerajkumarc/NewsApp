import axios from "axios";

const API_URL = 'https://latestnewsapi.vercel.app';

export const fetchNews = async (category) => {
  try {
    const { data } = await axios.get(`${API_URL}/${category}`);
    return data.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};
