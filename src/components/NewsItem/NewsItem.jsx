import {useState} from 'react';
import styles from './NewsItem.module.css';
import {useNewsContext} from '../../context/NewsContext';
import NewsForm from '../NewsForm/NewsForm';

const NewsItem = ({item}) => {
    const {deleteNews} = useNewsContext();
    const [isEditing, setIsEditing] = useState(false);
    
    const isNew = (new Date() - new Date(item.createdAt)) < 24 * 60 * 60 * 1000;

    const formatDate = (dateString) => {
        const options = {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        };
        return new Date(dateString).toLocaleDateString('ru-RU', options);
    };

    return (
        <div className={`${styles.newsItem} animate__fadeIn`}>
            {isEditing ? (
                <NewsForm
                    editItem={item}
                    onCancel={() => setIsEditing(false)}
                />
            ) : (
                <>
                    <div className={styles.newsItem__header}>
                        <h3 className={styles.newsItem__title}>{item.title}</h3>
                        <time className={`${styles.newsItem__time} ${isNew ? styles.newsItem__time_new : ''}`}>
                            {formatDate(item.createdAt)}
                        </time>
                    </div>
                    <p className={styles.newsItem__content}>{item.content}</p>
                    <div className={styles.newsItem__actions}>
                        <button
                            onClick={() => setIsEditing(true)}
                            className={styles.newsItem__button}
                        >
                            ✏️
                        </button>
                        <button
                            onClick={() => deleteNews(item.id)}
                            className={`${styles.newsItem__button} ${styles.newsItem__button_delete}`}
                        >
                            🗑️
                        </button>
                    </div>
                </>
            )}
        </div>
    );
};

export default NewsItem;
