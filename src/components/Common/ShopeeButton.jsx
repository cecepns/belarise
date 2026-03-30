import { useState, useEffect } from 'react';
import { ShoppingBag } from 'lucide-react';
import { settingsAPI } from '../../utils/api';

const ShopeeButton = () => {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUrl = async () => {
      try {
        const response = await settingsAPI.get();
        const shopeeUrl = response.data.data?.shopee_url || '';
        setUrl(shopeeUrl);
      } catch (error) {
        console.error('Error fetching Shopee URL:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUrl();
  }, []);

  const handleClick = () => {
    if (!url) return;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  if (loading || !url) {
    return null;
  }

  return (
    <div className="fixed bottom-40 right-6 z-50">
      <button
        onClick={handleClick}
        className="bg-[#FF5722] hover:bg-[#e64a19] text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 group relative"
        aria-label="Kunjungi Shopee kami"
        title="Kunjungi Shopee kami"
      >
        <div className="relative">
          <ShoppingBag size={26} className="group-hover:scale-110 transition-transform relative z-10" />
        </div>
        <span className="absolute inset-0 rounded-full bg-[#FF5722]/70 animate-ping opacity-75"></span>
      </button>
    </div>
  );
};

export default ShopeeButton;

