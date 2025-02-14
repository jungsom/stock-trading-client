import { useEffect, useState } from 'react';
import { fetchNews } from '../services/NewsService';

const useNews = () => {
  const [news, setNews] = useState<any[]>([]);

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
