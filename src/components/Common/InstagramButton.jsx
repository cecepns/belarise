import { useState, useEffect } from 'react';
import { Instagram } from 'lucide-react';
import { settingsAPI } from '../../utils/api';

const InstagramButton = () => {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUrl = async () => {
      try {
        const response = await settingsAPI.get();
        const instagramUrl = response.data.data?.instagram_url || '';
        setUrl(instagramUrl);
      } catch (error) {
        console.error('Error fetching Instagram URL:', error);
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
    <div className="fixed bottom-24 right-6 z-50">
      <button
        onClick={handleClick}
        className="bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 hover:brightness-110 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 group relative"
        aria-label="Kunjungi Instagram kami"
        title="Kunjungi Instagram kami"
      >
        <div className="relative">
          <Instagram size={26} className="group-hover:scale-110 transition-transform relative z-10" />
        </div>
        <span className="absolute inset-0 rounded-full bg-pink-500/70 animate-ping opacity-75"></span>
      </button>
    </div>
  );
};

export default InstagramButton;

