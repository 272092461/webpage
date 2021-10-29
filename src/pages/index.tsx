import { Property } from 'csstype';
import {
  RightOutlined,
  PhoneFilled,
  PrinterFilled,
  MailFilled,
  EnvironmentFilled,
} from '@ant-design/icons';
import { Button } from '@/components/button';
import { useState, useRef, useEffect } from 'react';
import styles from './index.less';
import FadeIn from '@/components/FadeIn';
// import { Header } from '../components/header'
import { Carousel } from 'antd';
// const NumberEasing = require('che-react-number-easing');
import SmoothNumber from 'react-number-animator';

const contentStyle = {
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center' as Property.TextAlign,
  background: '#364d79',
};

const MainMenu = () => (
  <div className={styles.block}>
    <div className={styles.menuWrap}>
      <div className={styles.menuMore}>
        <RightOutlined className={styles.menuMoreIcon} />
        <div>更多服务</div>
      </div>
      <div className={styles.mainMenuTitle}>SERVICE PROJECT</div>
      <div className={styles.menuList}>
        <div className={styles.menuItem}>
          <div className={styles.menuIcon}>
            <img
              style={{ width: '31px', height: '28px' }}
              src={require('@/assets/images/home/homeMainMenu_1.png')}
              alt=""
            />
          </div>
          <div className={styles.menuTitle}>展览设计</div>
          <div>Exhibition</div>
          <div>design</div>
        </div>
        <div className={styles.menuItem}>
          <div className={styles.menuIcon}>
            <img
              style={{ width: '33px', height: '33px' }}
              src={require('@/assets/images/home/homeMainMenu_2.png')}
              alt=""
            />
          </div>
          <div className={styles.menuTitle}>展厅规划</div>
          <div>Exhibition</div>
          <div>planning</div>
        </div>
        <div className={styles.menuItem}>
          <div className={styles.menuIcon}>
            <img
              style={{ width: '24px', height: '32px' }}
              src={require('@/assets/images/home/homeMainMenu_3.png')}
              alt=""
            />
          </div>
          <div className={styles.menuTitle}>活动策划</div>
          <div>Event</div>
          <div>planning</div>
        </div>
        <div className={styles.menuItem}>
          <div className={styles.menuIcon}>
            <img
              style={{ width: '21px', height: '36px' }}
              src={require('@/assets/images/home/homeMainMenu_4.png')}
              alt=""
            />
          </div>
          <div className={styles.menuTitle}>VI形象设计</div>
          <div>Vi</div>
          <div>design</div>
        </div>
        <div className={styles.menuItem}>
          <div className={styles.menuIcon}>
            <img
              style={{ width: '35px', height: '32px' }}
              src={require('@/assets/images/home/homeMainMenu_5.png')}
              alt=""
            />
          </div>
          <div className={styles.menuTitle}>店铺设计</div>
          <div>store</div>
          <div>design</div>
        </div>
      </div>
    </div>
  </div>
);

const Example = () => (
  <div className={styles.block}>
    <div className={styles.blockContent}>
      <div className={styles.blockTitle}>经典案例</div>
      <FadeIn>
        <div className={styles.exampleWrap}>
          <div>
            <img src={require('@/assets/images/home/example_1.jpg')} alt="" />
            <div className={styles.exampleTitle}>上海服装周</div>
          </div>
          <div>
            <img src={require('@/assets/images/home/example_2.jpg')} alt="" />
            <div className={styles.exampleTitle}>
              阿姆斯特丹集装箱展 | 威士伯
            </div>
          </div>
          <div>
            <img src={require('@/assets/images/home/example_3.jpg')} alt="" />
            <div className={styles.exampleTitle}>家纺面料 | 明日世界</div>
          </div>
          <div>
            <img src={require('@/assets/images/home/example_4.jpg')} alt="" />
            <div className={styles.exampleTitle}>卫浴展 | 森力</div>
          </div>
        </div>
      </FadeIn>
      <div className={styles.blockButton}>
        <Button>更多案例</Button>
      </div>
    </div>
  </div>
);

const MoreButton = () => (
  <div className={styles.moreButton}>
    <div className={styles.moreBtnText}>MORE</div>
    <div className={styles.moreBtnIcon}>
      <RightOutlined />
    </div>
  </div>
);

const AboutUs = () => (
  <div className={styles.aboutUsWrap}>
    <div className={styles.block} style={{ height: '100%' }}>
      <div className={styles.aboutUsContent}>
        <div className={styles.mainMenuTitle}>ABOUT US</div>
        <div className={styles.aboutUsTitle}>Exhibition design</div>
        <div className={styles.aboutUsLine}></div>
        <FadeIn offsetY={100}>
          <div className={styles.aboutUsText}>
            会展服务有限公司
            成立于2004年，注册资金1000万元，专注展台设计搭建12年，500多家企业成为xxx会展的忠实客户，所有设计团队成员均具有国内知名美术学院美术专业背景，平均从业经验5.3年。
          </div>
        </FadeIn>
        <div className={styles.aboutUsBottom}>
          <div className={styles.aboutUsList}>
            <div>发展历程</div>
            <div>企业文化</div>
            <div>联系方式</div>
          </div>
          <MoreButton />
        </div>
      </div>
    </div>
  </div>
);

const DesignGroup = () => (
  <div className={styles.block}>
    <div className={styles.blockContent}>
      <div className={styles.blockTitle}>设计团队</div>

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
      <div className={styles.blockButton}>
        <Button>更多案例</Button>
      </div>
    </div>
  </div>
);

function isElementInViewport(el: HTMLElement) {
  //获取元素是否在可视区域
  var rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.top <= (window.innerHeight || document.documentElement.clientHeight)
  );
}

const Advance = () => {
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
    <div className={styles.advanceWrap}>
      <div className={styles.title}>我们的优势</div>
      <FadeIn offsetY={0} scale={0.5}>
        <div className={styles.desc}>
          专注展台设计搭建12年，500多家企业成为xxx会展的忠实客户，所有设计团队成员均具有国内知名美术学院美术专业背景，平均从业经验5.3年
        </div>
      </FadeIn>
      <div className={styles.numberWrap}>
        <div ref={ref} className={styles.numberItem}>
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
          <div className={styles.numberText}>23名专业设计师</div>
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
  );
};

const News = () => (
  <div className={styles.block} style={{ width: '1049px' }}>
    <div className={styles.blockContent}>
      <div className={styles.blockTitle}>新闻动态</div>
      <FadeIn>
        <div className={styles.newsItem}>
          <div className={styles.newsTitle}>
            CES新品总汇:展会正式开幕,今年哪些科技会成为风向标?
          </div>
          <div className={styles.newsDesc}>
            虽然在CES
            2019的展会上,三星始终小心翼翼,对“S10”守口如瓶,但仍然意外透露了许多即将推出的旗舰手机系列的相关细节。
            除了与Verizon、AT&T和Sprint...
          </div>
        </div>
        <div className={styles.newsItem}>
          <div className={styles.newsTitle}>
            CES新品总汇:展会正式开幕,今年哪些科技会成为风向标?
          </div>
          <div className={styles.newsDesc}>
            虽然在CES
            2019的展会上,三星始终小心翼翼,对“S10”守口如瓶,但仍然意外透露了许多即将推出的旗舰手机系列的相关细节。
            除了与Verizon、AT&T和Sprint...
          </div>
        </div>
        <div className={styles.newsItem}>
          <div className={styles.newsTitle}>
            CES新品总汇:展会正式开幕,今年哪些科技会成为风向标?
          </div>
          <div className={styles.newsDesc}>
            虽然在CES
            2019的展会上,三星始终小心翼翼,对“S10”守口如瓶,但仍然意外透露了许多即将推出的旗舰手机系列的相关细节。
            除了与Verizon、AT&T和Sprint...
          </div>
        </div>
      </FadeIn>
      <div className={styles.blockButton}>
        <Button>更多新闻</Button>
      </div>
    </div>
  </div>
);

const ContractUs = () => (
  <div className={styles.contractUsWrap}>
    <div className={styles.contractUsContent}>
      <div className={styles.map}>
        <a
          target="_blank"
          href="https://map.baidu.com/poi/%E5%8C%96%E5%B7%A5%E8%B4%B8%E6%98%93%E7%BB%93%E7%AE%97%E4%B8%AD%E5%BF%83%E5%A4%A7%E6%A5%BC/@11587135.725,3567967.62,19z?uid=6956512728d91087bfa82233&ugc_type=3&ugc_ver=1&device_ratio=2&compat=1&seckey=e7ccd76a71cca7384bc9d56993ddbed2e19bbff4744b85e39bb3d65be30e7613e76ae0b8689ae7f5bb14207898aef6950e69432a9314fa542a239fa64bfb5b4524ab8085dc1de827b038f5cc4bd6a7a0515a08965dbd447f7a951e63b6b662e48e51e00ed81ec3c11ab910556f494388f9bfbe19755f77dd658b1bdfe2c662d4fa978024f4089d9954fb4a731c13effec86f986409ccb226735288822b201debaf4c6cbf6fe05312090bbdd522de3cc227196828522c5a2fa8de9fccb31b31a866630197b6c5040227be379f3ed52a86ba0df776ee93f2aaa2b7821cab35fd1c&pcevaname=pc4.1&newfrom=zhuzhan_webmap&querytype=detailConInfo&da_src=shareurl"
        >
          <img src={require('@/assets/images/home/map.jpg')} alt="" />
        </a>
      </div>
      <div className={styles.contractUsInfo}>
        <div>
          <div className={styles.contractTitle}>联系我们/Contact us</div>
          <div className={styles.contractTip}>
            专注展台设计搭建12年，500多家企业成为xxx会展的忠实客户
          </div>
          <div className={styles.contractField}>
            <PhoneFilled className={styles.contractIcon} />
            联系电话：400-000-0000
          </div>
          <div className={styles.contractField}>
            <PrinterFilled className={styles.contractIcon} />
            传真地址：12345678910
          </div>
          <div className={styles.contractField}>
            <MailFilled className={styles.contractIcon} />
            公司邮箱:123456@126.com
          </div>
          <div className={styles.contractField}>
            <EnvironmentFilled className={styles.contractIcon} />
            公司地址：北京市朝阳区xx大厦xx室xxxx
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default function IndexPage() {
  return (
    <div>
      {/* <Header></Header> */}
      <Carousel style={contentStyle} autoplay dotPosition="left">
        <div className={styles.banner}>
          <img src={require('../assets/images/banner.jpg')} />
        </div>
        <div className={styles.banner}>
          <img src={require('../assets/images/banner.jpg')} />
        </div>
        <div className={styles.banner}>
          <img src={require('../assets/images/banner.jpg')} />
        </div>
        <div className={styles.banner}>
          <img src={require('../assets/images/banner.jpg')} />
        </div>
      </Carousel>
      <MainMenu></MainMenu>
      <Example></Example>
      <AboutUs />
      <DesignGroup></DesignGroup>
      <Advance />
      <News></News>
      <ContractUs />
    </div>
  );
}
