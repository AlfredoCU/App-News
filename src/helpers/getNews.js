import axios from "axios";

export const getNews = async (country, category) => {
  try {
    const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=6036323404c0468b86d4f243074e3840`;
    const {
      data: { articles }
    } = await axios.get(url);
    return articles;
  } catch (error) {
    console.error("GET_NEWS_ERROR", error);
  }
};
