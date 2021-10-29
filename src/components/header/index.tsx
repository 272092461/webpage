import { useEffect, useState } from 'react';
import { Link } from 'umi';
import { MenuUnfoldOutlined } from '@ant-design/icons';
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

  useEffect(() => {
    window.addEventListener('scroll', scrollHandle);

    return () => {
      window.removeEventListener('scroll', scrollHandle, false);
    };
  }, []);

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
                  网站首页
                </a>
                {/* <ul className="nav-children">
                  <li>
                    <a href="/business/reception.html"> 企业智能前台 </a>
                  </li>
                  <li>
                    <a href="/business/dispatch.html"> 布控系统 </a>
                  </li>
                  <li>
                    <a href="/business/property.html"> 物业系统 </a>
                  </li>
                  <li>
                    <a href="/business/className.html"> 课堂点名系统 </a>
                  </li>
                </ul> */}
              </li>
              <li>
                <a href="/aboutUs">
                  <i className="fa"></i>
                  关于我们
                </a>
              </li>
              <li>
                <a href="/service">
                  <i className="fa"></i>
                  服务项目
                </a>
              </li>
              <li>
                <a href="/case">
                  <i className="fa"></i>
                  经典案例
                </a>
              </li>
              <li>
                <a href="/team">
                  <i className="fa"></i>
                  设计团队
                </a>
              </li>
              <li>
                <a href="/news">
                  <i className="fa"></i>
                  新闻动态
                </a>
              </li>
              <li>
                <a href="/contact">
                  <i className="fa fa-chevron-right"></i>
                  联系我们
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
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
