import { useState, useEffect } from 'react';
import { useLocation, Link } from 'umi';
import styles from './index.less';
import SubBanner from '@/components/subBanner';
import FadeIn from '@/components/FadeIn';
import { Breadcrumb } from 'antd';

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
        '以展示企业产品或形象为目在固定时间空间环境里进行的三维和平面创造设计叫做展览设计',
      cover: require('@/assets/images/case/case_1.jpg'),
      href: '/service/detail',
    },
    {
      type: 1,
      title: '阳光工艺',
      desc:
        '以展示企业产品或形象为目在固定时间空间环境里进行的三维和平面创造设计叫做展览设计',
      cover: require('@/assets/images/case/case_1.jpg'),
      href: '/service/detail',
    },
    {
      type: 2,
      title: '宏丰',
      desc:
        '以展示企业产品或形象为目在固定时间空间环境里进行的三维和平面创造设计叫做展览设计',
      cover: require('@/assets/images/case/case_1.jpg'),
      href: '/service/detail',
    },
    {
      type: 3,
      title: '胶原姬',
      desc:
        '以展示企业产品或形象为目在固定时间空间环境里进行的三维和平面创造设计叫做展览设计',
      cover: require('@/assets/images/case/case_1.jpg'),
      href: '/service/detail',
    },
    {
      type: 4,
      title: '沃克斯',
      desc:
        '以展示企业产品或形象为目在固定时间空间环境里进行的三维和平面创造设计叫做展览设计',
      cover: require('@/assets/images/case/case_1.jpg'),
      href: '/service/detail',
    },
    {
      type: 1,
      title: '晶日照明',
      desc:
        '以展示企业产品或形象为目在固定时间空间环境里进行的三维和平面创造设计叫做展览设计',
      cover: require('@/assets/images/case/case_1.jpg'),
      href: '/service/detail',
    },
    {
      type: 1,
      title: '晶日照明',
      desc:
        '以展示企业产品或形象为目在固定时间空间环境里进行的三维和平面创造设计叫做展览设计',
      cover: require('@/assets/images/case/case_1.jpg'),
      href: '/service/detail',
    },
    {
      type: 1,
      title: '晶日照明',
      desc:
        '以展示企业产品或形象为目在固定时间空间环境里进行的三维和平面创造设计叫做展览设计',
      cover: require('@/assets/images/case/case_1.jpg'),
      href: '/service/detail',
    },
  ];

  return (
    <div>
      <SubBanner title="经典案例" />
      <div className={styles.blockBg}>
        <div className={styles.block}>
          <div className={styles.contentWrap}>
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
                  dataSource={dataList}
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
                            to={
                              {
                                // pathname: item.href,
                              }
                            }
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
