import { useState, useEffect } from 'react';
import { Breadcrumb, Image } from 'antd';
import { Link, useLocation } from 'umi';
import styles from '../index.less';
import detailStyles from './detail.less';
import SubBanner from '@/components/subBanner';

type State = {
  name: string;
  type: number;
};

export default () => {
  const { state } = useLocation<State>();

  const detail = {
    title: '标题',
    desc: '浙江晶日照明科技有限公司',
    cover: require('@/assets/images/service/detail_1.jpg'),
    href: '#',
  };
  const typeList = [{ name: '行业动态', type: 0 }];

  // 菜单控制处理
  const [menuIndex, setIndex] = useState(-1);

  const Menus = () => (
    <>
      {typeList.map((item, index) => (
        <Link to={`/service?type=${index}`}>
          <div
            className={
              state?.type === index ? styles.menuItemAc : styles.menuItem
            }
          >
            {item.name}
          </div>
        </Link>
      ))}
    </>
  );

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
              <span className={styles.breadCrumb}>服务项目</span>
            </Breadcrumb.Item>
            <Breadcrumb.Item
              className={styles.breadCrumb}
              href={`/service?type=${state?.type}`}
            >
              <span className={styles.breadCrumb}>{state.name}</span>
            </Breadcrumb.Item>
          </Breadcrumb>

          <div className={styles.contentWrap}>
            <div className={styles.menuWrap}>
              <Menus></Menus>
            </div>

            <div className={detailStyles.articleWrap}>
              <div className={detailStyles.title}>{detail.title}</div>
              <div className={detailStyles.content}>
                <div className={detailStyles.contentTitle}>{detail.desc}</div>
                <Image width="100%" src={detail.cover}></Image>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
