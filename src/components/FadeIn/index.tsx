import { useEffect, useState, useRef } from 'react';
import { Transition } from 'react-transition-group';

const transitionStyles = {
  entering: { opacity: 1, transform: 'translate3d(0, 0, 0) scale(1)' },
  entered: { opacity: 1, transform: 'translate3d(0, 0, 0) scale(1)' },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
  unmounted: { opacity: 0 },
};

function isElementInViewport(el: HTMLElement) {
  //获取元素是否在可视区域
  var rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.top <= (window.innerHeight || document.documentElement.clientHeight)
  );
}

export default ({
  offsetY = 200,
  scale = 1,
  duration = 1000,
  children,
}: {
  offsetY?: number;
  scale?: number;
  duration?: number;
  children: any;
}) => {
  const [show, setShow] = useState(false);
  const ref = useRef<any>();

  const defaultStyle = {
    transform: `translate3d(0, ${offsetY}px, 0) scale(${scale})`,
    transition: `all ${duration}ms ease-in-out`,
  };

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

  return (
    <Transition in={show} appear exit={false} timeout={duration}>
      {(state) => (
        <div
          ref={ref}
          style={{
            ...defaultStyle,
            ...transitionStyles[state],
          }}
        >
          {children}
        </div>
      )}
    </Transition>
  );
};
