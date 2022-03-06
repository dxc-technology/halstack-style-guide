/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    loader: "custom",
  },
  trailingSlash: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.md$/,
      use: "raw-loader",
    });

    return config;
  },
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/",
        destination: "/overview/introduction",
        permanent: true,
      },
    ];
  },
};
