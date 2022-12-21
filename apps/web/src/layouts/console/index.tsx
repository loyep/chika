import type { MenuProps } from 'antd';
import { ConfigProvider, Layout, Menu } from 'antd';
import 'antd/dist/reset.css';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ReactNode, useEffect, useState } from 'react';
const { Header, Footer, Sider, Content } = Layout;

const menus: MenuProps['items'] = [
  {
    label: '',
    type: 'group',
    children: [
      {
        key: 'dashboard',
        label: <Link href="/console/dashboard">控制台</Link>,
      },
    ],
  },
  {
    label: '内容',
    type: 'group',
    children: [
      {
        key: 'posts',
        label: <Link href="/console/posts">文章</Link>,
      },
      {
        key: 'pages',
        label: <Link href="/console/pages">页面</Link>,
      },
      {
        key: 'comments',
        label: <Link href="/console/comments">评论</Link>,
      },
      {
        key: 'attachments',
        label: <Link href="/console/attachments">附件</Link>,
      },
    ],
  },
  {
    label: '外观',
    type: 'group',
    children: [
      {
        key: 'theme',
        label: <Link href="/console/theme">主题</Link>,
      },
      {
        key: 'menus',
        label: <Link href="/console/menus">菜单</Link>,
      },
    ],
  },
  {
    label: '系统',
    type: 'group',
    children: [
      {
        key: 'plugins',
        label: <Link href="/console/plugins">插件</Link>,
      },
      {
        key: 'users',
        label: <Link href="/console/users">用户</Link>,
      },
      {
        key: 'settings/basic',
        label: <Link href="/console/settings/basic">设置</Link>,
      },
    ],
  },
  {
    label: '工具',
    type: 'group',
    children: [
      {
        key: 'migrate',
        label: <Link href="/console/migrate">迁移</Link>,
      },
      {
        key: 'umami',
        label: <Link href="/console/umami">Umami</Link>,
      },
    ],
  },
];

export default function ConsoleLayout({ children }: { children: ReactNode }) {
  const [selectedKeys, setSelectedKeys] = useState<string[]>([]);
  const router = useRouter();

  useEffect(() => {
    const keys = router.pathname.replace('/console/', '').split('/');
    console.log(keys);
    setSelectedKeys([router.pathname.replace('/console/', '')]);
  }, []);

  const onSelect = ({ selectedKeys }: { selectedKeys: string[] }) => {
    setSelectedKeys(selectedKeys);
    console.log(selectedKeys);
  };
  return (
    <ConfigProvider>
      <Layout style={{ minHeight: '100vh' }}>
        <Sider theme="light" className="bg-white">
          <div className="text-center py-4 text-2xl font-bold">Console</div>
          <Menu selectedKeys={selectedKeys} theme="light" items={menus} onSelect={onSelect} />
        </Sider>
        <Layout>
          {/* <Header>Header</Header> */}
          <Content>{children}</Content>
          <Footer>Footer</Footer>
        </Layout>
      </Layout>
    </ConfigProvider>
  );
}
