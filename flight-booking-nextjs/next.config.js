/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  // images: {
  //   domains: [process.env.NEXT_SERVER_URL,process.env.NEXTAUTH_URL], // Use the environment variable for the domain
  // },
  env: {
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
    NEXTAUTH_URL_PROD: process.env.NEXTAUTH_URL_PROD,
    NEXTAUTH_URL_DEV: process.env.NEXTAUTH_URL_DEV,
    NEXT_SERVER_URL: process.env.NEXT_SERVER_URL,
    ENV_MODE: process.env.ENV_MODE,
    AUTH_SECRET: process.env.AUTH_SECRET,
  },
}

module.exports = nextConfig;
