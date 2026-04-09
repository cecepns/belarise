import Header from './Header';
import Footer from './Footer';
import WhatsAppButton from '../Common/WhatsAppButton';
import InstagramButton from '../Common/InstagramButton';
import ShopeeButton from '../Common/ShopeeButton';
import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';

const Layout = ({ children }) => {
  useEffect(() => {
    if (window.fbq) return;

    !(function (f, b, e, v, n, t, s) {
      if (f.fbq) return;
      n = f.fbq = function () {
        n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
      };
      if (!f._fbq) f._fbq = n;
      n.push = n;
      n.loaded = true;
      n.version = '2.0';
      n.queue = [];
      t = b.createElement(e);
      t.async = true;
      t.src = v;
      s = b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t, s);
    })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');

    window.fbq('init', '1247786203864821');
    window.fbq('track', 'PageView');
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <noscript>
        <img
          alt=""
          height="1"
          width="1"
          style={{ display: 'none' }}
          src="https://www.facebook.com/tr?id=1247786203864821&ev=PageView&noscript=1"
        />
      </noscript>
      <Header />
      <main className="flex-grow">
        {children || <Outlet />}
      </main>
      <Footer />
      <WhatsAppButton />
      <ShopeeButton />
      <InstagramButton />
    </div>
  );
};

export default Layout;