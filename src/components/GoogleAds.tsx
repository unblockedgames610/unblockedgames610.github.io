import React, { useEffect } from 'react';

declare global {
  interface Window {
    adsbygoogle: any[];
  }
}

interface GoogleAdsProps {
  client: string;
  slot: string;
  format: string;
}

const GoogleAds: React.FC<GoogleAdsProps> = ({ client, slot, format }) => {
  useEffect(() => {
    // Đảm bảo rằng quảng cáo chỉ được kích hoạt sau khi trang đã render hoàn chỉnh
    if (window.adsbygoogle) {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    }
  }, []); // Chạy chỉ 1 lần sau khi render

  return (
    <ins className="adsbygoogle"
         style={{ display: 'block' }}
         data-ad-client={client}
         data-ad-slot={slot}
         data-ad-format={format}></ins>
  );
};

export default GoogleAds;
