/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    emotion: true,
  },
  webpack: (config) => {
    // iCloud Drive などスペース含みのパスでキャッシュ rename が失敗するため無効化
    config.cache = false;
    return config;
  },
};

export default nextConfig;
