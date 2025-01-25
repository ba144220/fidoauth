/** @type {import('next').NextConfig} */

module.exports = () => {
  const rewrites = () => {
    return [
      {
        source: "/api/me",
        destination: "http://127.0.0.1:5000/api/me",
      },
      {
        source: "/api/:path*",
        destination: "http://127.0.0.1:5000/:path*",
      },
      {
        source: "/oauth/:path*",
        destination: "http://127.0.0.1:5000/oauth/:path*",
      },
    ];
  };
  return {
    rewrites,
  };
};
