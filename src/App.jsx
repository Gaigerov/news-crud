import { NewsProvider } from './context/NewsContext';
import NewsList from './components/NewsList/NewsList';
import Header from './components/Layout/Header';
import './utils/animations.css';
import styles from './App.module.css';

function App() {
  return (
    <NewsProvider>
      <div className={styles.app}>
        <Header />
        <main className={styles.mainContent}>
          <NewsList />
        </main>
      </div>
    </NewsProvider>
  );
}

export default App;
