// get env variable//
import dotenv from 'dotenv';

dotenv.config();

const env = process.env.NODE_ENV || 'development';

/** @type {import('next').NextConfig} */
const nextConfigProd = {
  output: 'export',
  basePath: '/portfolio',
  assetPrefix: '/portfolio/',
  images: {
    unoptimized: true,
  },
};

/** @type {import('next').NextConfig} */
const nextConfigDev = {
  output: 'export',
};

const nextConfig = env === 'development' ? nextConfigDev : nextConfigProd;

export default nextConfig;
