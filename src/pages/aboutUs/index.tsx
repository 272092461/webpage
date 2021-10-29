import styles from './index.less';
import SubBanner from '@/components/subBanner';
import SmoothNumber from 'react-number-animator';
import FadeIn from '@/components/FadeIn';
import { useState, useRef, useEffect } from 'react';

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
      <SubBanner title="关于我们" />

      <div className={styles.article}>
        <FadeIn>
          <p>
            xx会展服务有限公司
            成立于2004年，注册资金1000万元，专注展台设计搭建12年，500多家企业成为xxx会展的忠实客户，所有设计团队成员均具有国内知名美术学院美术专业背景，平均从业经验5.3年。自工厂9年施工经验可将效果图实景还原95%以上，公司创始人总经理xxxx先生会展管理专业毕业，阿里学院展会营销讲师，创赢中国精英企业家评选30强。
            xxxx上海展览工厂坐落于上海市浦东新区，工厂占
            地面积达到3000平方米。拥有技术精良的工程技术和施工人员100余人，分为木工班（四个班）、电工班、油漆班、铁工组、美工组，分工明确，配合熟练，
            能为客户提供优质高效的制作搭建服务。多次完成过国家科技展、成果展等大型展览，获得过诸多奖项。我们会本着"客户至上，质量第一，服务周到，安全可靠"
            的宗旨做好每一个项目！届时，xxx上海展览工厂以最好的质量，最优的价格，最热诚的服务来满足您的要求!
          </p>
          <p>
            xxxx会展服务有限公司
            成立于2004年，注册资金1000万元，专注展台设计搭建12年，500多家企业成为xxx会展的忠实客户，所有设计团队成员均具有国内知名美术学院美术专业背景，平均从业经验5.3年。自工厂9年施工经验可将效果图实景还原95%以上，公司创始人总经理xxxx先生会展管理专业毕业，阿里学院展会营销讲师，创赢中国精英企业家评选30强。
            xxxx上海展览工厂坐落于上海市浦东新区，工厂占
            地面积达到3000平方米。拥有技术精良的工程技术和施工人员100余人，分为木工班（四个班）、电工班、油漆班、铁工组、美工组，分工明确，配合熟练，
            能为客户提供优质高效的制作搭建服务。多次完成过国家科技展、成果展等大型展览，获得过诸多奖项。我们会本着"客户至上，质量第一，服务周到，安全可靠"
            的宗旨做好每一个项目！届时，xxx上海展览工厂以最好的质量，最优的价格，最热诚的服务来满足您的要求!
          </p>
        </FadeIn>
      </div>

      <div className={styles.comdata}>
        <div ref={ref} className={styles.numberWrap}>
          <div className={styles.numberItem}>
            <div className={styles.number}>
              <SmoothNumber value={show ? 10 : 0} totalSteps={100} />
              <div className={styles.numberDecor}>+</div>
            </div>
            <div className={styles.numberText}>10年行业经验</div>
          </div>
          <div className={styles.numberItem}>
            <div className={styles.number}>
              <SmoothNumber value={show ? 120 : 0} totalSteps={100} />
              <div className={styles.numberDecor}>+</div>
            </div>
            <div className={styles.numberText}>120+客户案例</div>
          </div>
          <div className={styles.numberItem}>
            <div className={styles.number}>
              <SmoothNumber value={show ? 23 : 0} totalSteps={100} />
              {/* <div className={styles.numberDecor}>+</div> */}
            </div>
            <div className={styles.numberText}>23名道工序</div>
          </div>
          <div className={styles.numberItem}>
            <div className={styles.number}>
              <SmoothNumber value={show ? 99 : 0} totalSteps={100} />
              <div className={styles.numberDecor}>%</div>
            </div>
            <div className={styles.numberText}>99%好评</div>
          </div>
        </div>
      </div>

      <div className={styles.block}>
        <div className={styles.blockContent}>
          <div className={styles.blockTitle}>荣誉资质</div>

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
