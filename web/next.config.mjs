let apiHostname = "localhost";
let apiPort = "4000";

try {
  const apiUrl = new URL(process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000");
  apiHostname = apiUrl.hostname;
  apiPort = apiUrl.port;
} catch {
  // fall back to localhost defaults above
}

const isLoopbackHost = apiHostname === "localhost" || apiHostname === "127.0.0.1";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Next.js 16 blocks image optimization against hosts resolving to a
    // private/loopback IP by default (SSRF protection). Our API runs on
    // localhost in dev — safe to allow here since we control the target.
    // Production API hosts won't be loopback, so this has no effect there.
    dangerouslyAllowLocalIP: isLoopbackHost,
    remotePatterns: [
      {
        protocol: "http",
        hostname: apiHostname,
        port: apiPort,
        pathname: "/uploads/**",
        search: "",
      },
      {
        protocol: "https",
        hostname: apiHostname,
        pathname: "/uploads/**",
        search: "",
      },
    ],
  },
};

export default nextConfig;
