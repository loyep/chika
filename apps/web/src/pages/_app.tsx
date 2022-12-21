import type { NextPage } from 'next';
import type { Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';
import type { AppType } from 'next/app';
import { ReactElement, ReactNode } from 'react';
import '../styles/globals.css';
import { trpc } from '../utils/trpc';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

const App: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  const getLayout = (Component as NextPageWithLayout).getLayout ?? ((page) => page);

  return (
    <SessionProvider session={session}>{getLayout(<Component {...pageProps} />)}</SessionProvider>
  );
};

export default trpc.withTRPC(App);
