import { Redis } from 'ioredis';

declare global {
  // allow global `var` declarations
  // eslint-disable-next-line no-var
  var redis: Redis | undefined;
}

export const redis = global.redis || new Redis('');

if (process.env.NODE_ENV !== 'production') {
  global.redis = redis;
}
