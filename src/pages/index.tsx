import { Property } from 'csstype'
import { RightOutlined } from '@ant-design/icons';
import { Button } from '@/components/button'
import styles from './index.less';
// import { Header } from '../components/header'
import { Carousel } from 'antd'

const contentStyle = {
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center' as Property.TextAlign,
  background: '#364d79',
}

const MainMenu = () => (
  <div className={styles.block}>

    <div className={styles.menuWrap}>
      <div className={styles.menuMore}>
        <RightOutlined className={styles.menuMoreIcon} />
        <div>
          更多服务
        </div>
      </div>
      <div className={styles.mainMenuTitle}>
        SERVICE PROJECT
      </div>
      <div className={styles.menuList}>
        <div className={styles.menuItem}>
          <div className={styles.menuIcon}>
            <img style={{width: '31px', height: '28px'}} src={require('@/assets/images/home/homeMainMenu_1.png')} alt="" />
          </div>
          <div className={styles.menuTitle}>
            展览设计
          </div>
          <div>Exhibition</div>
          <div>design</div>
        </div>
        <div className={styles.menuItem}>
        <div className={styles.menuIcon}>
            <img style={{width: '33px', height: '33px'}} src={require('@/assets/images/home/homeMainMenu_2.png')} alt="" />
          </div>
          <div className={styles.menuTitle}>
            展厅规划
          </div>
          <div>Exhibition</div>
          <div>planning</div>
        </div>
        <div className={styles.menuItem}>
          <div className={styles.menuIcon}>
            <img style={{width: '24px', height: '32px'}} src={require('@/assets/images/home/homeMainMenu_3.png')} alt="" />
          </div>
          <div className={styles.menuTitle}>
            活动策划
          </div>
          <div>Event</div>
          <div>planning</div>
        </div>
        <div className={styles.menuItem}>
          <div className={styles.menuIcon}>
            <img style={{width: '21px', height: '36px'}} src={require('@/assets/images/home/homeMainMenu_4.png')} alt="" />
          </div>
          <div className={styles.menuTitle}>
          VI形象设计
          </div>
          <div>Vi</div>
          <div>design</div>
        </div>
        <div className={styles.menuItem}>
          <div className={styles.menuIcon}>
            <img style={{width: '35px', height: '32px'}} src={require('@/assets/images/home/homeMainMenu_5.png')} alt="" />
          </div>
          <div className={styles.menuTitle}>
          店铺设计
          </div>
          <div>store</div>
          <div>design</div>
        </div>
      </div>
    </div>
  </div>
)

const Example = () => (
  <div className={styles.block}>
    <div className={styles.blockContent}>
      <div className={styles.blockTitle}>经典案例</div>
      <div className={styles.exampleWrap}>
        <div>
          <img src={require('@/assets/images/home/example_1.jpg')} alt="" />
          <div className={styles.exampleTitle}>
            上海服装周
          </div>
        </div>
        <div>
          <img src={require('@/assets/images/home/example_2.jpg')} alt="" />
          <div className={styles.exampleTitle}>
            阿姆斯特丹集装箱展 | 威士伯
          </div>
        </div>
        <div>
          <img src={require('@/assets/images/home/example_3.jpg')} alt="" />
          <div className={styles.exampleTitle}>
            家纺面料 | 明日世界
          </div>
        </div>
        <div>
          <img src={require('@/assets/images/home/example_4.jpg')} alt="" />
          <div className={styles.exampleTitle}>
            卫浴展 | 森力
          </div>
        </div>
      </div>
      <div className={styles.blockButton}>
        <Button>更多案例</Button>
      </div>
    </div>
  </div>
)

const MoreButton = () => (
  <div className={styles.moreButton}>
    <div className={styles.moreBtnText}>MORE</div>
    <div className={styles.moreBtnIcon}>
      <RightOutlined  />
    </div>
  </div>
)

const AboutUs = () => (
  <div className={styles.aboutUsWrap}>
    <div className={styles.block} style={{ height: '100%' }}>
      <div className={styles.aboutUsContent}>
        <div className={styles.mainMenuTitle}>
          ABOUT US
        </div>
        <div className={styles.aboutUsTitle}>
          Exhibition design
        </div>
        <div className={styles.aboutUsLine}></div>
        <div className={styles.aboutUsText}>
          会展服务有限公司 成立于2004年，注册资金1000万元，专注展台设计搭建12年，500多家企业成为xxx会展的忠实客户，所有设计团队成员均具有国内知名美术学院美术专业背景，平均从业经验5.3年。
        </div>
        <div className={styles.aboutUsBottom}>
          <div className={styles.aboutUsList}>
            <div>发展历程</div> 
            <div>企业文化</div> 
            <div>联系方式</div>
          </div>
          <MoreButton/>
        </div>
      </div>
    </div>
  </div>
)

const DesignGroup = () => (
  <div className={styles.block}>
    <div className={styles.blockContent}>
      <div className={styles.blockTitle}>设计团队</div>

      <div className={styles.designGroupWrap}>
        <div className={styles.designGroupItem}>
          <img src={require('@/assets/images/home/designGroup_1.jpg')} alt="" />
        </div>
        <div>
          <img src={require('@/assets/images/home/designGroup_2.jpg')} alt="" />
        </div>
        <div>
          <img src={require('@/assets/images/home/designGroup_3.jpg')} alt="" />
        </div>
        <div>
          <img src={require('@/assets/images/home/designGroup_4.jpg')} alt="" />
        </div>
        <div>
          <img src={require('@/assets/images/home/designGroup_5.jpg')} alt="" />
        </div>
        <div>
          <img src={require('@/assets/images/home/designGroup_6.jpg')} alt="" />
        </div>
        <div>
          <img src={require('@/assets/images/home/designGroup_7.jpg')} alt="" />
        </div>
        <div>
          <img src={require('@/assets/images/home/designGroup_8.jpg')} alt="" />
        </div>
      </div>
    </div>
  </div>
)

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
    </div>
  );
}
