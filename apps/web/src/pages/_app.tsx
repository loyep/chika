import { ConfigProvider } from 'antd';
import 'antd/dist/reset.css';
import type { Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';
import type { AppType } from 'next/app';
import '../styles/globals.css';

import { trpc } from '../utils/trpc';

const App: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <ConfigProvider>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </ConfigProvider>
  );
};

export default trpc.withTRPC(App);
