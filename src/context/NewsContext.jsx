import {createContext, useContext} from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

const NewsContext = createContext();

export const NewsProvider = ({children}) => {
    const [news, setNews] = useLocalStorage('news', []);

    const addNews = (item) => {
        setNews([...news, {
            ...item,
            id: Date.now(),
            createdAt: new Date().toISOString() 
        }]);
    };

    const updateNews = (id, updatedItem) => {
        setNews(news.map(item => item.id === id ? {
            ...updatedItem,
            id,
            createdAt: item.createdAt
        } : item));
    };

    const deleteNews = (id) => {
        setNews(news.filter(item => item.id !== id));
    };

    return (
        <NewsContext.Provider value={{news, addNews, updateNews, deleteNews}}>
            {children}
        </NewsContext.Provider>
    );
};

export const useNewsContext = () => useContext(NewsContext);
