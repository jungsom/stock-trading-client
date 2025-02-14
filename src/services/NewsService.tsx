export const fetchNews = async (): Promise<any[]> => { 
  try {
    const response = await fetch(
      'http://api-v2.deepsearch.com/v1/articles?symbols=KRX:005380&date_from=2025-02-14&date_to=2025-02-14&api_key=a09198d59b4642be9c6c5a5419734a4b',
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP 오류! 상태 코드: ${response.status}`);
    }

    const data = await response.json(); 
    console.log("뉴스 데이터:", data);
    return Array.isArray(data) ? data : []; 
  } catch (error) {
    console.error("뉴스 가져오기 오류:", error);
    return []; 
  }
};
