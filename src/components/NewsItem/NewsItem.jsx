import {useState} from 'react';
import styles from './NewsItem.module.css';
import {useNewsContext} from '../../context/NewsContext';
import NewsForm from '../NewsForm/NewsForm';

const NewsItem = ({item}) => {
    const {deleteNews} = useNewsContext();
    const [isEditing, setIsEditing] = useState(false);

    return (
        <div className={`${styles.newsItem} animate__fadeIn`}>
            {isEditing ? (
                <NewsForm
                    editItem={item}
                    onCancel={() => setIsEditing(false)}
                />
            ) : (
                <>
                    <h3 className={styles.newsItem__title}>{item.title}</h3>
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
