import { useState, useEffect } from 'react';
import { useLocation, Link } from 'umi';
import styles from './index.less';
import SubBanner from '@/components/subBanner';
import { Breadcrumb } from 'antd';
import FadeIn from '@/components/FadeIn';

import { List, Avatar, Space } from 'antd';

interface PageLocation {
  query: {
    type?: string;
  };
}

export default () => {
  const dataList = [
    {
      type: 0,
      title: '晶日照明',
      desc:
        '会展是指会议、展览（Exhibition，Trade Show，Exposition，Trade Fair 或Trade Events等）、大型活动等集体性的商业或非商业活动的简称。其概念内涵是指在一定...会展是指会议、展览（Exhibition，Trade Show，Exposition，Trade',
      cover: require('@/assets/images/service/service_1.jpg'),
      href: '/service/detail',
    },
    {
      type: 1,
      title: '阳光工艺',
      desc:
        '会展是指会议、展览（Exhibition，Trade Show，Exposition，Trade Fair 或Trade Events等）、大型活动等集体性的商业或非商业活动的简称。其概念内涵是指在一定...会展是指会议、展览（Exhibition，Trade Show，Exposition，Trade',
      cover: require('@/assets/images/service/service_1.jpg'),
      href: '/service/detail',
    },
    {
      type: 2,
      title: '宏丰',
      desc:
        '会展是指会议、展览（Exhibition，Trade Show，Exposition，Trade Fair 或Trade Events等）、大型活动等集体性的商业或非商业活动的简称。其概念内涵是指在一定...会展是指会议、展览（Exhibition，Trade Show，Exposition，Trade',
      cover: require('@/assets/images/service/service_1.jpg'),
      href: '/service/detail',
    },
    {
      type: 3,
      title: '胶原姬',
      desc:
        '会展是指会议、展览（Exhibition，Trade Show，Exposition，Trade Fair 或Trade Events等）、大型活动等集体性的商业或非商业活动的简称。其概念内涵是指在一定...会展是指会议、展览（Exhibition，Trade Show，Exposition，Trade',
      cover: require('@/assets/images/service/service_1.jpg'),
      href: '/service/detail',
    },
    {
      type: 4,
      title: '沃克斯',
      desc:
        '会展是指会议、展览（Exhibition，Trade Show，Exposition，Trade Fair 或Trade Events等）、大型活动等集体性的商业或非商业活动的简称。其概念内涵是指在一定...会展是指会议、展览（Exhibition，Trade Show，Exposition，Trade',
      cover: require('@/assets/images/service/service_1.jpg'),
      href: '/service/detail',
    },
    {
      type: 1,
      title: '晶日照明',
      desc:
        '会展是指会议、展览（Exhibition，Trade Show，Exposition，Trade Fair 或Trade Events等）、大型活动等集体性的商业或非商业活动的简称。其概念内涵是指在一定...会展是指会议、展览（Exhibition，Trade Show，Exposition，Trade',
      cover: require('@/assets/images/service/service_1.jpg'),
      href: '/service/detail',
    },
    {
      type: 1,
      title: '晶日照明',
      desc:
        '会展是指会议、展览（Exhibition，Trade Show，Exposition，Trade Fair 或Trade Events等）、大型活动等集体性的商业或非商业活动的简称。其概念内涵是指在一定...会展是指会议、展览（Exhibition，Trade Show，Exposition，Trade',
      cover: require('@/assets/images/service/service_1.jpg'),
      href: '/service/detail',
    },
    {
      type: 1,
      title: '晶日照明',
      desc:
        '会展是指会议、展览（Exhibition，Trade Show，Exposition，Trade Fair 或Trade Events等）、大型活动等集体性的商业或非商业活动的简称。其概念内涵是指在一定...会展是指会议、展览（Exhibition，Trade Show，Exposition，Trade',
      cover: require('@/assets/images/service/service_1.jpg'),
      href: '/service/detail',
    },
  ];
  const typeList = [
    { name: '照明展', type: 0 },
    { name: '家纺展览', type: 1 },
    { name: '广交会展览', type: 2 },
    { name: '美博会展览', type: 3 },
    { name: '电梯展', type: 4 },
  ];

  const location: PageLocation = useLocation();
  const { type } = location?.query;
  const defaultIndex = type ? Number(type) : -1;

  // 菜单控制处理
  const [menuIndex, setIndex] = useState(defaultIndex);

  const Menus = () => (
    <>
      {typeList.map((item, index) => (
        <div
          className={menuIndex === index ? styles.menuItemAc : styles.menuItem}
          onClick={() => setIndex(index)}
        >
          {item.name}
        </div>
      ))}
    </>
  );

  // 数组筛选处理
  const [showList, setShow] = useState([...dataList]);

  const listFilter = (list: typeof dataList) => {
    if (menuIndex === -1) {
      return dataList;
    }

    return list.filter((i) => i.type === menuIndex);
  };

  useEffect(() => {
    const list = listFilter(dataList);
    // debugger
    setShow(list);
  }, [menuIndex]);

  return (
    <div>
      <SubBanner title="服务项目" />
      <div className={styles.blockBg}>
        <div className={styles.block}>
          <Breadcrumb separator=">>">
            <Breadcrumb.Item href="/">
              <span className={styles.breadCrumb}>首页</span>
            </Breadcrumb.Item>
            <Breadcrumb.Item className={styles.breadCrumb} href="/service">
              <span className={styles.breadCrumb}>服务项目</span>
            </Breadcrumb.Item>
          </Breadcrumb>

          <div className={styles.contentWrap}>
            <FadeIn duration={800}>
              <div className={styles.menuWrap}>
                <Menus></Menus>
              </div>
            </FadeIn>

            <div className={styles.listWrap}>
              <FadeIn>
                <List
                  className={styles.list}
                  itemLayout="vertical"
                  // rowKey="id"
                  size="large"
                  pagination={{
                    onChange: (page) => {
                      console.log(page);
                    },
                    pageSize: 5,
                  }}
                  split={false}
                  dataSource={showList}
                  renderItem={(item, index) => (
                    <List.Item
                      className={styles.listItem}
                      key={index}
                      extra={
                        <div className={styles.listImage}>
                          <img alt="logo" src={item.cover} />
                        </div>
                      }
                    >
                      <List.Item.Meta
                        title={
                          <Link
                            className={styles.listTitle}
                            to={{
                              pathname: item.href,
                              state: {
                                ...typeList[item.type],
                              },
                            }}
                          >
                            {item.title}
                          </Link>
                        }
                        description={item.desc}
                      />
                    </List.Item>
                  )}
                />
              </FadeIn>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
