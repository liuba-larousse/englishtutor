import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Placeholder portraits are SVGs (replaced by raster photos in Step 3).
    // These are first-party assets, so serving them through the optimizer is safe.
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
