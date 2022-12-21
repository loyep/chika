import { ConfigProvider } from 'antd';
import type { ReactNode } from 'react';

import 'antd/dist/reset.css';
export default function AuthLayout({ children }: { children: ReactNode }) {
  return <ConfigProvider>{children}</ConfigProvider>;
}
