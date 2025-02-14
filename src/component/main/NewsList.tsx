import useNews from '../../hooks/useNews';

const NewsList = () => {
  const news = useNews();

  return (
    <>
      <p> 📰 뉴스 목록 </p>
      <ul>
            {news.map((article, index) => (
              <li key={index}>{article.title}</li>
            ))}
          </ul>
    </>
  );
};

export default NewsList;
