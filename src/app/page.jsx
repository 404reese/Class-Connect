import Image from "next/image";
import styles from "./home.module.css";
import Buttons from "./buttons";
import About from './about/page';
  
const Home = () => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>Class Connect</h1>
          <p className={styles.desc}>
            Think notes, advice, and connections <br></br> Think Class Connect!
          </p>
          <div className={styles.buttons}>
              <Buttons />
          </div>
        </div>
        <div className={styles.imgContainer}>
          <Image src="/heroimg.png" alt="" width={600} height={600} className={styles.heroImg} />
        </div>
      </div>
      
    <About />

    </div>
  );
};

export default Home;