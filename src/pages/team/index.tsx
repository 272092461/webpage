import styles from './index.less';
import SubBanner from '@/components/subBanner';
import FadeIn from '@/components/FadeIn';

const DesignGroup = () => (
  <div className={styles.block}>
    <div className={styles.blockContent}>
      <div className={styles.designGroupWrap}>
        <FadeIn offsetY={-100}>
          <div className={styles.designGroupItem}>
            <img
              src={require('@/assets/images/home/designGroup_1.jpg')}
              alt=""
            />
            <div className={styles.designGroupInfo}>
              <div>王自然</div>
              <span>
                1988年毕业于杭州师范学院外语系，同年担任杭州电子工业学院英文及国际贸易教师1995年创.
              </span>
            </div>
          </div>
        </FadeIn>
        <div className={styles.designGroupItem}>
          <img src={require('@/assets/images/home/designGroup_2.jpg')} alt="" />
          <div className={styles.designGroupInfo}>
            <div>王自然</div>
            <span>
              1988年毕业于杭州师范学院外语系，同年担任杭州电子工业学院英文及国际贸易教师1995年创.
            </span>
          </div>
        </div>
        <div className={styles.designGroupItem}>
          <img src={require('@/assets/images/home/designGroup_3.jpg')} alt="" />
          <div className={styles.designGroupInfo}>
            <div>王自然</div>
            <span>
              1988年毕业于杭州师范学院外语系，同年担任杭州电子工业学院英文及国际贸易教师1995年创.
            </span>
          </div>
        </div>
        <div className={styles.designGroupItem}>
          <img src={require('@/assets/images/home/designGroup_4.jpg')} alt="" />
          <div className={styles.designGroupInfo}>
            <div>王自然</div>
            <span>
              1988年毕业于杭州师范学院外语系，同年担任杭州电子工业学院英文及国际贸易教师1995年创.
            </span>
          </div>
        </div>
        <div className={styles.designGroupItem}>
          <img src={require('@/assets/images/home/designGroup_5.jpg')} alt="" />
          <div className={styles.designGroupInfo}>
            <div>王自然</div>
            <span>
              1988年毕业于杭州师范学院外语系，同年担任杭州电子工业学院英文及国际贸易教师1995年创.
            </span>
          </div>
        </div>
        <div className={styles.designGroupItem}>
          <img src={require('@/assets/images/home/designGroup_6.jpg')} alt="" />
          <div className={styles.designGroupInfo}>
            <div>王自然</div>
            <span>
              1988年毕业于杭州师范学院外语系，同年担任杭州电子工业学院英文及国际贸易教师1995年创.
            </span>
          </div>
        </div>
        <div className={styles.designGroupItem}>
          <img src={require('@/assets/images/home/designGroup_7.jpg')} alt="" />
          <div className={styles.designGroupInfo}>
            <div>王自然</div>
            <span>
              1988年毕业于杭州师范学院外语系，同年担任杭州电子工业学院英文及国际贸易教师1995年创.
            </span>
          </div>
        </div>
        <FadeIn offsetY={100}>
          <div className={styles.designGroupItem}>
            <img
              src={require('@/assets/images/home/designGroup_8.jpg')}
              alt=""
            />
            <div className={styles.designGroupInfo}>
              <div>王自然</div>
              <span>
                1988年毕业于杭州师范学院外语系，同年担任杭州电子工业学院英文及国际贸易教师1995年创.
              </span>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  </div>
);

export default () => {
  return (
    <div>
      <SubBanner title="设计团队" />
      <DesignGroup />
    </div>
  );
};
