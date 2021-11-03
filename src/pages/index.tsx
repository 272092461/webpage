import { Property } from 'csstype';
import {
  RightOutlined,
  PhoneFilled,
  PrinterFilled,
  MailFilled,
  EnvironmentFilled,
} from '@ant-design/icons';
import { useIntl } from 'umi';
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

const MainMenu = () => {
  const intl = useIntl();

  return (
    <div className={styles.block}>
      <div className={styles.menuWrap}>
        <div className={styles.menuMore}>
          <RightOutlined className={styles.menuMoreIcon} />
          <div>{intl.formatMessage({ id: 'MORE_SERVICE' })}</div>
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
            <div className={styles.menuTitle}>
              {intl.formatMessage({ id: 'PROJ_1' })}
            </div>
            <div>{intl.formatMessage({ id: 'PROJ_1_1' })}</div>
            <div>{intl.formatMessage({ id: 'PROJ_1_2' })}</div>
          </div>
          <div className={styles.menuItem}>
            <div className={styles.menuIcon}>
              <img
                style={{ width: '33px', height: '33px' }}
                src={require('@/assets/images/home/homeMainMenu_2.png')}
                alt=""
              />
            </div>
            <div className={styles.menuTitle}>
              {intl.formatMessage({ id: 'PROJ_2' })}
            </div>
            <div>{intl.formatMessage({ id: 'PROJ_2_1' })}</div>
            <div>{intl.formatMessage({ id: 'PROJ_2_2' })}</div>
          </div>
          <div className={styles.menuItem}>
            <div className={styles.menuIcon}>
              <img
                style={{ width: '24px', height: '32px' }}
                src={require('@/assets/images/home/homeMainMenu_3.png')}
                alt=""
              />
            </div>
            <div className={styles.menuTitle}>
              {intl.formatMessage({ id: 'PROJ_3' })}
            </div>
            <div>{intl.formatMessage({ id: 'PROJ_3_1' })}</div>
            <div>{intl.formatMessage({ id: 'PROJ_3_2' })}</div>
          </div>
          <div className={styles.menuItem}>
            <div className={styles.menuIcon}>
              <img
                style={{ width: '21px', height: '36px' }}
                src={require('@/assets/images/home/homeMainMenu_4.png')}
                alt=""
              />
            </div>
            <div className={styles.menuTitle}>
              {intl.formatMessage({ id: 'PROJ_4' })}
            </div>
            <div>{intl.formatMessage({ id: 'PROJ_4_1' })}</div>
            <div>{intl.formatMessage({ id: 'PROJ_4_2' })}</div>
          </div>
          <div className={styles.menuItem}>
            <div className={styles.menuIcon}>
              <img
                style={{ width: '35px', height: '32px' }}
                src={require('@/assets/images/home/homeMainMenu_5.png')}
                alt=""
              />
            </div>
            <div className={styles.menuTitle}>
              {intl.formatMessage({ id: 'PROJ_5' })}
            </div>
            <div>{intl.formatMessage({ id: 'PROJ_5_1' })}</div>
            <div>{intl.formatMessage({ id: 'PROJ_5_2' })}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Example = () => {
  const intl = useIntl();

  return (
    <div className={styles.block}>
      <div className={styles.blockContent}>
        <div className={styles.blockTitle}>
          {intl.formatMessage({ id: 'HOME_CASE' })}
        </div>
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
          <Button>{intl.formatMessage({ id: 'MORE_CASE' })}</Button>
        </div>
      </div>
    </div>
  );
};

const MoreButton = () => (
  <div className={styles.moreButton}>
    <div className={styles.moreBtnText}>MORE</div>
    <div className={styles.moreBtnIcon}>
      <RightOutlined />
    </div>
  </div>
);

const AboutUs = () => {
  const intl = useIntl();

  return (
    <div className={styles.aboutUsWrap}>
      <div className={styles.block} style={{ height: '100%' }}>
        <div className={styles.aboutUsContent}>
          <div className={styles.mainMenuTitle}>ABOUT US</div>
          <div className={styles.aboutUsTitle}>Exhibition design</div>
          <div className={styles.aboutUsLine}></div>
          <FadeIn offsetY={100}>
            <div className={styles.aboutUsText}>
              {intl.formatMessage({ id: 'COM_DESC' })}
            </div>
          </FadeIn>
          <div className={styles.aboutUsBottom}>
            <div className={styles.aboutUsList}>
              <div>{intl.formatMessage({ id: 'COM_HISTORY' })}</div>
              <div>{intl.formatMessage({ id: 'COM_CULTURE' })}</div>
              <div>{intl.formatMessage({ id: 'COM_CONTACT' })}</div>
            </div>
            <MoreButton />
          </div>
        </div>
      </div>
    </div>
  );
};

const DesignGroup = () => {
  const intl = useIntl();

  return (
    <div className={styles.block}>
      <div className={styles.blockContent}>
        <div className={styles.blockTitle}>
          {intl.formatMessage({ id: 'HOME_DESIGN_TEAM' })}
        </div>

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
            <img
              src={require('@/assets/images/home/designGroup_2.jpg')}
              alt=""
            />
            <div className={styles.designGroupInfo}>
              <div>王自然</div>
              <span>
                1988年毕业于杭州师范学院外语系，同年担任杭州电子工业学院英文及国际贸易教师1995年创.
              </span>
            </div>
          </div>
          <div className={styles.designGroupItem}>
            <img
              src={require('@/assets/images/home/designGroup_3.jpg')}
              alt=""
            />
            <div className={styles.designGroupInfo}>
              <div>王自然</div>
              <span>
                1988年毕业于杭州师范学院外语系，同年担任杭州电子工业学院英文及国际贸易教师1995年创.
              </span>
            </div>
          </div>
          <div className={styles.designGroupItem}>
            <img
              src={require('@/assets/images/home/designGroup_4.jpg')}
              alt=""
            />
            <div className={styles.designGroupInfo}>
              <div>王自然</div>
              <span>
                1988年毕业于杭州师范学院外语系，同年担任杭州电子工业学院英文及国际贸易教师1995年创.
              </span>
            </div>
          </div>
          <div className={styles.designGroupItem}>
            <img
              src={require('@/assets/images/home/designGroup_5.jpg')}
              alt=""
            />
            <div className={styles.designGroupInfo}>
              <div>王自然</div>
              <span>
                1988年毕业于杭州师范学院外语系，同年担任杭州电子工业学院英文及国际贸易教师1995年创.
              </span>
            </div>
          </div>
          <div className={styles.designGroupItem}>
            <img
              src={require('@/assets/images/home/designGroup_6.jpg')}
              alt=""
            />
            <div className={styles.designGroupInfo}>
              <div>王自然</div>
              <span>
                1988年毕业于杭州师范学院外语系，同年担任杭州电子工业学院英文及国际贸易教师1995年创.
              </span>
            </div>
          </div>
          <div className={styles.designGroupItem}>
            <img
              src={require('@/assets/images/home/designGroup_7.jpg')}
              alt=""
            />
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
          <Button>{intl.formatMessage({ id: 'MORE_CASE' })}</Button>
        </div>
      </div>
    </div>
  );
};

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

  const intl = useIntl();

  return (
    <div className={styles.advanceWrap}>
      <div className={styles.title}>
        {intl.formatMessage({ id: 'HOME_ADVANTAGE' })}
      </div>
      <FadeIn offsetY={0} scale={0.5}>
        <div className={styles.desc}>
          {intl.formatMessage({ id: 'AD_DESC' })}
        </div>
      </FadeIn>
      <div className={styles.numberWrap}>
        <div ref={ref} className={styles.numberItem}>
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
  );
};

const News = () => {
  const intl = useIntl();

  return (
    <div className={styles.block} style={{ width: '1049px' }}>
      <div className={styles.blockContent}>
        <div className={styles.blockTitle}>
          {intl.formatMessage({ id: 'HOME_NEWS' })}
        </div>
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
          <Button>{intl.formatMessage({ id: 'MORE_NEWS' })}</Button>
        </div>
      </div>
    </div>
  );
};

const ContractUs = () => {
  const intl = useIntl();

  return (
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
              {intl.formatMessage({ id: 'CONTACT_DESC' })}
            </div>
            <div className={styles.contractField}>
              <PhoneFilled className={styles.contractIcon} />
              {intl.formatMessage({ id: 'CONTACT_TEL' })}
            </div>
            <div className={styles.contractField}>
              <PrinterFilled className={styles.contractIcon} />
              {intl.formatMessage({ id: 'CONTACT_TAX' })}
            </div>
            <div className={styles.contractField}>
              <MailFilled className={styles.contractIcon} />
              {intl.formatMessage({ id: 'CONTACT_MAIL' })}
            </div>
            <div className={styles.contractField}>
              <EnvironmentFilled className={styles.contractIcon} />
              {intl.formatMessage({ id: 'CONTACT_ADDR' })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

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
