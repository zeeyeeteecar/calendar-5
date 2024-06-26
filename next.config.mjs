/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: "https",
  //       hostname: "www.accessrichmond.org",
  //       port: "",
  //       pathname: "/Captures/labels/TomT/**",
  //     },
  //   ],
  // },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.accessrichmond.org",
      },
      {
        protocol: "https",
        hostname: "user-images.githubusercontent.com",
      },
    ],
  },

};

export default nextConfig;
