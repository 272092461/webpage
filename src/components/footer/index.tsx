import styles from './index.less';
import { useIntl } from 'umi';

export function Footer() {
  // 国际化hook
  const intl = useIntl();

  return (
    <div className={styles.footer}>
      <div className={styles.webInfo}>
        <div className={styles.webInfoContent}>
          <img src={require('../../assets/images/logo_black.png')} />

          <div className={styles.linkGroup}>
            <a href="/aboutUs">
              {intl.formatMessage({
                id: 'ABOUT_US',
              })}
            </a>
            <a href="/service">
              {intl.formatMessage({
                id: 'SERVICE_PROJECT',
              })}
            </a>
            <a href="/case">
              {intl.formatMessage({
                id: 'CASE',
              })}
            </a>
            <a href="/team">
              {intl.formatMessage({
                id: 'DESIGN_TEAM',
              })}
            </a>
            <a href="/news">
              {intl.formatMessage({
                id: 'NEWS',
              })}
            </a>
            <a href="/contact">
              {intl.formatMessage({
                id: 'CONTACT',
              })}
            </a>
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
