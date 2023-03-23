import styles from '../styles/Home.module.css';
import HomepageLeft from './HomepageLeft'
import HomepageMiddle from './HomepageMiddle';
import HomepageRight from './HomepageRight';

function Home() {
  return (
    <div>
      <main className={styles.main}>
        <HomepageLeft/>
        <HomepageMiddle/>
        <HomepageRight/>
      </main>
    </div>
  );
}

export default Home;
