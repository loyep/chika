import { appRouter, createContext } from '@chika/trpc';
import { createNextApiHandler } from '@trpc/server/adapters/next';
import type { NextApiRequest, NextApiResponse } from 'next';

// If you need to enable cors, you can do so like this:
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  // Let the tRPC handler do its magic
  return createNextApiHandler({
    router: appRouter,
    createContext,
  })(req, res);
};

export default handler;
