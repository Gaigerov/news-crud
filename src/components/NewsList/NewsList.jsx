import { useState } from 'react';
import styles from './NewsList.module.css';
import NewsItem from '../NewsItem/NewsItem';
import NewsForm from '../NewsForm/NewsForm';
import { useNewsContext } from '../../context/NewsContext';

const NewsList = () => {
  const { news } = useNewsContext();
  const [showForm, setShowForm] = useState(false);

  return (
    <div className={styles.newsList}>
      <h1 className={styles.newsList__header}>Новости</h1>
      
      {showForm ? (
        <NewsForm onCancel={() => setShowForm(false)} />
      ) : (
        <button 
          onClick={() => setShowForm(true)}
          className={styles.newsList__addButton}
        >
          + Добавить новость
        </button>
      )}

      <div className={styles.newsList__items}>
        {news.length > 0 ? (
          news.map(item => (
            <NewsItem key={item.id} item={item} />
          ))
        ) : (
          <p className={styles.newsList__empty}>Новостей пока нет</p>
        )}
      </div>
    </div>
  );
};

export default NewsList;
