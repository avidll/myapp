import React from 'react';
import {Carousel} from 'antd';
import styles from './Home.less';

const Home: React.FC = () => (
  <>
    <Carousel autoplay>
      <div className={styles.bgImage1}>
        <h1 className={styles.center_word}>我想这一直都是遇见与别离，只不过是时交替流转</h1>
      </div>
      <div className={styles.bgImage2}>
        <h1 className={styles.center_word}>我想这一直都是遇见与别离，只不过是时交替流转</h1>
      </div>
      <div className={styles.bgImage3}>
        <h1 className={styles.center_word}>我想这一直都是遇见与别离，只不过是时交替流转</h1>
      </div>
      <div className={styles.bgImage4}>
        <h1 className={styles.center_word}>我想这一直都是遇见与别离，只不过是时交替流转</h1>
      </div>
    </Carousel>
  </>
);

export default Home;
