import useNews from '../../hooks/useNews';
import './NewsList.css';
import { mockNews } from './NewsMock';
const NewsList = () => {
  const news = useNews();

  return (
    <>
      <div className='news-container'>
        <p> 📰 주요 뉴스 목록 </p>
        {mockNews.data.map((article, index) => (
          <div className='news-item' key={index}>
            <div className='news-image'>
              <img src={article.thumbnail_url} />
            </div>
            <div className='news-content'>
              <a className='news-content-1' href={article.content_url}> {article.title} </a>
              <div className='news-content-2'> {article.summary} </div>
              <div className='news-content-3'>
                {' '}
                By {article.publisher}•{' '}
                {new Date(article.published_at).toLocaleTimeString([], {
                  hour: '2-digit',
                  minute: '2-digit'
                })}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default NewsList;
