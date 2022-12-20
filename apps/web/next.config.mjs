// @ts-check
/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation.
 * This is especially useful for Docker builds.
 */
// !process.env.SKIP_ENV_VALIDATION && (await import("./src/env/server.mjs"));

import tm from 'next-transpile-modules';

const withTM = tm(['@chika/prisma', '@chika/trpc', '@chika/auth']);

const config = withTM({
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
});

export default config;
