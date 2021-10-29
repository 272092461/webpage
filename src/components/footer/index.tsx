import styles from './index.less';

export function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.webInfo}>
        <div className={styles.webInfoContent}>
          <img src={require('../../assets/images/logo_black.png')} />

          <div className={styles.linkGroup}>
            <a href="/aboutUs">关于我们</a>
            <a href="/service">服务项目</a>
            <a href="/case">经典案例</a>
            <a href="/team">设计团队</a>
            <a href="/news">新闻动态</a>
            <a href="/contact">联系我们</a>
          </div>
        </div>
        <div className={styles.otherInfo}>
          <div>Copyright @ 2014. All rights reserved.XXXX</div>
          <div>版权所有. 京ICP备00000000号</div>
        </div>
      </div>
      <div className={styles.copyright}>
        <div>Copyright @ 2021 . All rights reserved.</div>
        <div>网站</div>
      </div>
    </div>
  );
}
