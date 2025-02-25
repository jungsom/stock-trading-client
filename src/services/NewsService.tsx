import { format } from 'date-fns';

export const fetchNews = async (): Promise<any[]> => { 
  const today = format(new Date(), 'yyyy-MM-dd');
  const url = `https://api-v2.deepsearch.com/v1/articles/economy?date_from=${today}&date_to=${today}&api_key=${import.meta.env.VITE_NEWS_API_KEY}`

  try {
    const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );


    const data = await response.json(); 
    console.log("뉴스 데이터:", data);
    return Array.isArray(data) ? data : []; 
  } catch (error) {
    console.error("뉴스 가져오기 오류:", error);
    return []; 
  }
};
