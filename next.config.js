import MillionLint from '@million/lint';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = MillionLint.next(nextConfig, { rsc: true });