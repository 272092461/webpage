import styles from './index.less';
import SubBanner from '@/components/subBanner';
import SmoothNumber from 'react-number-animator';
import FadeIn from '@/components/FadeIn';
import { useState, useRef, useEffect } from 'react';
import { useIntl } from 'umi';

function isElementInViewport(el: HTMLElement) {
  //获取元素是否在可视区域
  var rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.top <= (window.innerHeight || document.documentElement.clientHeight)
  );
}

export default () => {
  const [show, setShow] = useState(false);
  const ref = useRef<any>();

  const intl = useIntl();

  // 只使用一次动画
  const handleScroll = () => {
    if (ref.current) {
      const flag = isElementInViewport(ref.current as HTMLElement);
      if (flag) {
        setShow(true);
        window.removeEventListener('scroll', handleScroll);
      } else {
        setShow(false);
      }
    }
  };

  useEffect(() => {
    setShow(true);
    window.addEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <SubBanner title={intl.formatMessage({ id: 'ABOUT_US' })} />

      <div className={styles.article}>
        <FadeIn>
          <p>{intl.formatMessage({ id: 'ABOUT_P1' })}</p>
          <p>{intl.formatMessage({ id: 'ABOUT_P2' })}</p>
        </FadeIn>
      </div>

      <div className={styles.comdata}>
        <div ref={ref} className={styles.numberWrap}>
          <div className={styles.numberItem}>
            <div className={styles.number}>
              <SmoothNumber value={show ? 10 : 0} totalSteps={100} />
              <div className={styles.numberDecor}>+</div>
            </div>
            <div className={styles.numberText}>
              {intl.formatMessage({ id: 'AD_EXP' }, { num: 10 })}
            </div>
          </div>
          <div className={styles.numberItem}>
            <div className={styles.number}>
              <SmoothNumber value={show ? 120 : 0} totalSteps={100} />
              <div className={styles.numberDecor}>+</div>
            </div>
            <div className={styles.numberText}>
              {intl.formatMessage({ id: 'AD_CASE' }, { num: 120 })}
            </div>
          </div>
          <div className={styles.numberItem}>
            <div className={styles.number}>
              <SmoothNumber value={show ? 23 : 0} totalSteps={100} />
              {/* <div className={styles.numberDecor}>+</div> */}
            </div>
            <div className={styles.numberText}>
              {intl.formatMessage({ id: 'AD_TEAM' }, { num: 23 })}
            </div>
          </div>
          <div className={styles.numberItem}>
            <div className={styles.number}>
              <SmoothNumber value={show ? 99 : 0} totalSteps={100} />
              <div className={styles.numberDecor}>%</div>
            </div>
            <div className={styles.numberText}>
              {intl.formatMessage({ id: 'AD_RE' }, { num: 99 })}
            </div>
          </div>
        </div>
      </div>

      <div className={styles.block}>
        <div className={styles.blockContent}>
          <div className={styles.blockTitle}>
            {intl.formatMessage({ id: 'ABOUT_HONOR' })}
          </div>

          <div className={styles.awardWrap}>
            <div className={styles.awardItem}>
              <img src={require('@/assets/images/aboutUs/ry_1.jpg')} alt="" />
            </div>
            <div className={styles.awardItem}>
              <img src={require('@/assets/images/aboutUs/ry_2.jpg')} alt="" />
            </div>
            <div className={styles.awardItem}>
              <img src={require('@/assets/images/aboutUs/ry_3.jpg')} alt="" />
            </div>
            <div className={styles.awardItem}>
              <img src={require('@/assets/images/aboutUs/ry_4.jpg')} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
