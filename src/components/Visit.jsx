import { useEffect } from 'react';

export default function VisitorTracker() {
  useEffect(() => {
    const sendVisitInfo = async () => {
      const timestamp = new Date().toLocaleString();
      const userAgent = navigator.userAgent;
      const isBot = /HeadlessChrome|bot|crawl|spider/i.test(userAgent);

      const escape = (str) =>
        str?.replace(/[\`"\\]/g, (match) => {
          if (match === '`') return "'";
          if (match === '\\') return '\\\\';
          return '\\"';
        }) || 'unknown';

      let ipInfo = {};
      let lat = null;
      let lon = null;

      try {
        const res = await fetch('https://ipapi.co/json/');
        ipInfo = await res.json();
        lat = ipInfo.latitude;
        lon = ipInfo.longitude;
      } catch (err) {
        console.warn('Gagal ambil data IP:', err);
      }

      const mapUrl = lat && lon ? `https://www.google.com/maps?q=${lat},${lon}` : 'unknown';
      const currentUrl = window.location.href;

      const messageObj = {
        ip: ipInfo.ip || 'unknown',
        city: escape(ipInfo.city),
        region: escape(ipInfo.region),
        country: escape(ipInfo.country_name),
        asn: escape(ipInfo.asn),
        org: escape(ipInfo.org),
        timezone: escape(ipInfo.timezone),
        page: currentUrl,
        bot_like: isBot,
        time: timestamp,
        device: escape(userAgent),
        
      };

      const message = `🟢 *New Visitor*: byd\n\`\`\`json\n${JSON.stringify(messageObj, null, 2)}\n\`\`\``;

      const telegramToken = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
      const chatId = import.meta.env.VITE_TELEGRAM_CHAT_ID;

      if (!telegramToken || !chatId) {
        console.error('Telegram credentials missing.');
        return;
      }

      try {
        const response = await fetch(`https://api.telegram.org/bot${telegramToken}/sendMessage`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            chat_id: chatId,
            text: message,
            parse_mode: 'Markdown',
          }),
        });

        const result = await response.json();
        if (!result.ok) {
          console.error('Telegram API Error:', result);
        }
      } catch (error) {
        console.error('Gagal kirim ke Telegram:', error);
      }
    };

    sendVisitInfo();
  }, []);

  return null;
}
