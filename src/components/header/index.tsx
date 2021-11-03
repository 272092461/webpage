import { useEffect, useState } from 'react';
import { useIntl, setLocale, getLocale } from 'umi';
import { MenuUnfoldOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import './index.css';

export function Header() {
  const defaultHeader = 'header-wrap';
  const scrollHeader = 'header-wrap header-scroll';

  const scrollHandle = function () {
    // var header = _('.header-wrap');

    if ((window.scrollY || document.documentElement.scrollTop) > 100) {
      setClass(scrollHeader);
    } else {
      setClass(defaultHeader);
    }
  };

  const [headerClass, setClass] = useState(defaultHeader);

  // 头部样式滚动控制
  useEffect(() => {
    window.addEventListener('scroll', scrollHandle);

    return () => {
      window.removeEventListener('scroll', scrollHandle, false);
    };
  }, []);

  // 国际化hook
  const intl = useIntl();

  const handleLang = () => {
    const local = getLocale();
    if (local === 'zh-CN') {
      setLocale('en-US', false);
    } else {
      setLocale('zh-CN', false);
    }
  };
  // const locales = getAllLocales()
  // setLocale('zh-CN', false)
  // debugger

  return (
    <div className={headerClass}>
      <input
        type="checkbox"
        id="content-response"
        className="content-response"
      ></input>
      <div className="header response">
        <div
          style={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <a className="pami-logo" href="/">
            <img src={require('../../assets/images/logo.png')} />
          </a>
          <div className="nav">
            <label htmlFor="content-response" className="mobile-menu">
              <MenuUnfoldOutlined className="fa fa-bars" />
            </label>
            <ul className="menu response-menu">
              <li>
                <a href="/">
                  <i className="fa fa-chevron-right"></i>
                  {intl.formatMessage({
                    id: 'HOME_PAGE',
                  })}
                </a>
              </li>
              <li>
                <a href="/aboutUs">
                  <i className="fa"></i>
                  {intl.formatMessage({
                    id: 'ABOUT_US',
                  })}
                </a>
              </li>
              <li>
                <a href="/service">
                  <i className="fa"></i>
                  {intl.formatMessage({
                    id: 'SERVICE_PROJECT',
                  })}
                </a>
              </li>
              <li>
                <a href="/case">
                  <i className="fa"></i>
                  {intl.formatMessage({
                    id: 'CASE',
                  })}
                </a>
              </li>
              <li>
                <a href="/team">
                  <i className="fa"></i>
                  {intl.formatMessage({
                    id: 'DESIGN_TEAM',
                  })}
                </a>
              </li>
              <li>
                <a href="/news">
                  <i className="fa"></i>
                  {intl.formatMessage({
                    id: 'NEWS',
                  })}
                </a>
              </li>
              <li>
                <a href="/contact">
                  <i className="fa fa-chevron-right"></i>
                  {intl.formatMessage({
                    id: 'CONTACT',
                  })}
                </a>
                {/* <ul className="nav-children">
                  <li>
                    <a href="/aboutUs/pami.html"> 关于我们 </a>
                  </li>
                  <li>
                    <a href="/aboutUs/action.html"> 公司动态 </a>
                  </li>
                  <li>
                    <a href="/aboutUs/contect.html"> 联系我们 </a>
                  </li>
                  <li>
                    <a href="/aboutUs/join.html"> 加入我们 </a>
                  </li>
                </ul> */}
              </li>
              <Button style={{ marginLeft: '10px' }} ghost onClick={handleLang}>
                {intl.formatMessage({ id: 'LANGUAGE' })}
              </Button>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
