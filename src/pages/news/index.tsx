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
      title: '展览设计公司的趋势发展',
      desc:
        '由于经济与科技的发展过于迅速，所以很多人都在关注的就是各行各业的发展行情问题。在互联网发展迅速的条件下，我们会担心自己所在的领域是否会受到巨大的变动与冲击。那么，那些展览设计公司现在的发展行情如何呢?接下来，我们就从以下几方面来分析下展览公司的行情。 *、展览设计公司一般都是有一定经济实力的企业，在资金方面应该可以说是很充裕的。所以，只要能接到客源订单需要，并提供合适的设计案，应该在任何条件都可以很好地生存立',
      cover: require('@/assets/images/news/none.jpg'),
      href: '/news/detail',
    },
    {
      type: 0,
      title: '展览设计公司的趋势发展',
      desc:
        '由于经济与科技的发展过于迅速，所以很多人都在关注的就是各行各业的发展行情问题。在互联网发展迅速的条件下，我们会担心自己所在的领域是否会受到巨大的变动与冲击。那么，那些展览设计公司现在的发展行情如何呢?接下来，我们就从以下几方面来分析下展览公司的行情。 *、展览设计公司一般都是有一定经济实力的企业，在资金方面应该可以说是很充裕的。所以，只要能接到客源订单需要，并提供合适的设计案，应该在任何条件都可以很好地生存立',
      cover: require('@/assets/images/news/none.jpg'),
      href: '/news/detail',
    },
    {
      type: 0,
      title: '展览设计公司的趋势发展',
      desc:
        '由于经济与科技的发展过于迅速，所以很多人都在关注的就是各行各业的发展行情问题。在互联网发展迅速的条件下，我们会担心自己所在的领域是否会受到巨大的变动与冲击。那么，那些展览设计公司现在的发展行情如何呢?接下来，我们就从以下几方面来分析下展览公司的行情。 *、展览设计公司一般都是有一定经济实力的企业，在资金方面应该可以说是很充裕的。所以，只要能接到客源订单需要，并提供合适的设计案，应该在任何条件都可以很好地生存立',
      cover: require('@/assets/images/news/none.jpg'),
      href: '/news/detail',
    },
    {
      type: 0,
      title: '展览设计公司的趋势发展',
      desc:
        '由于经济与科技的发展过于迅速，所以很多人都在关注的就是各行各业的发展行情问题。在互联网发展迅速的条件下，我们会担心自己所在的领域是否会受到巨大的变动与冲击。那么，那些展览设计公司现在的发展行情如何呢?接下来，我们就从以下几方面来分析下展览公司的行情。 *、展览设计公司一般都是有一定经济实力的企业，在资金方面应该可以说是很充裕的。所以，只要能接到客源订单需要，并提供合适的设计案，应该在任何条件都可以很好地生存立',
      cover: require('@/assets/images/news/none.jpg'),
      href: '/news/detail',
    },
  ];
  const typeList = [{ name: '行业动态', type: 0 }];

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
      <SubBanner title="新闻动态" />
      <div className={styles.blockBg}>
        <div className={styles.block}>
          <Breadcrumb separator=">>">
            <Breadcrumb.Item href="/">
              <span className={styles.breadCrumb}>首页</span>
            </Breadcrumb.Item>
            <Breadcrumb.Item className={styles.breadCrumb} href="/service">
              <span className={styles.breadCrumb}>新闻动态</span>
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
