import Header from './Header';
import Footer from './Footer';
import WhatsAppButton from '../Common/WhatsAppButton';
import InstagramButton from '../Common/InstagramButton';
import ShopeeButton from '../Common/ShopeeButton';
import { Outlet } from 'react-router-dom';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
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