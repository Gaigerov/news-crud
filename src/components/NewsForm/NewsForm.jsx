import { useState } from 'react';
import styles from './NewsForm.module.css';
import { useNewsContext } from '../../context/NewsContext';

const NewsForm = ({ editItem, onCancel }) => {
  const { addNews, updateNews } = useNewsContext();
  const [formData, setFormData] = useState(editItem || { title: '', content: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editItem) {
      updateNews(editItem.id, formData);
    } else {
      addNews(formData);
    }
    onCancel?.();
  };

  return (
    <form onSubmit={handleSubmit} className={`${styles.newsForm} animate__fadeIn`}>
      <input
        type="text"
        name="title"
        value={formData.title}
        onChange={handleChange}
        placeholder="Заголовок"
        required
        className={styles.newsForm__input}
      />
      <textarea
        name="content"
        value={formData.content}
        onChange={handleChange}
        placeholder="Содержание новости"
        required
        rows={4}
        className={styles.newsForm__textarea}
      />
      <div className={styles.newsForm__buttons}>
        <button type="submit" className={styles.newsForm__button}>
          {editItem ? 'Обновить' : 'Добавить'}
        </button>
        {editItem && (
          <button type="button" onClick={onCancel} className={`${styles.newsForm__button} ${styles.newsForm__button_cancel}`}>
            Отмена
          </button>
        )}
      </div>
    </form>
  );
};

export default NewsForm;
