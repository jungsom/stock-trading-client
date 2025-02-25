import { useEffect, useState } from 'react';
import { fetchNews } from '../services/NewsService';
import { News } from '../interfaces/News';

const useNews = () => {
  const [news, setNews] = useState<News[]>();

  useEffect(() => {
    const getNews = async () => {
      const news = await fetchNews();
      setNews(news);
    };

    getNews();
  }, []);

  return news;
};

export default useNews;
