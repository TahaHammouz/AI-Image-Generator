/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      "aiimagesgenerator.blob.core.windows.net",
      "links.papareact.com",
    ],
  },
};
