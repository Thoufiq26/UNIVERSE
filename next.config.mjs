// next.config.js

const nextConfig = {
    async headers() {
      return [
        {
          source: '/favicon.ico',
          headers: [
            {
              key: 'Content-Type',
              value: 'image/x-icon',
            },
          ],
        },
      ];
    },
  };
  
  
export default nextConfig;
