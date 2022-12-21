import type { MenuProps } from 'antd';
import { ConfigProvider, Menu } from 'antd';
import 'antd/dist/reset.css';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ReactNode, useEffect, useState } from 'react';
import styles from './index.module.css';

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
      <div className={styles.consoleBg}>
        <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-white">
            <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
              <div className="flex items-center flex-shrink-0 px-4">
                {/* <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/workflow-logo-indigo-600-mark-gray-800-text.svg"
                  alt="Console"
                /> */}
                <div className="text-center text-2xl font-bold h-8 w-auto">Console</div>
              </div>
              <Menu
                className="mt-5 flex-1 bg-white space-y-1"
                selectedKeys={selectedKeys}
                theme="light"
                items={menus}
                onSelect={onSelect}
              />
            </div>
            <div className="flex-shrink-0 flex border-t border-gray-200 p-4">
              <a href="#" className="flex-shrink-0 w-full group block">
                <div className="flex items-center">
                  <div>
                    <img
                      className="inline-block h-9 w-9 rounded-full"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
                      Tom Cook
                    </p>
                    <p className="text-xs font-medium text-gray-500 group-hover:text-gray-700">
                      View profile
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="md:pl-64 flex flex-col flex-1">
          <div className="sticky top-0 z-10 md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3 bg-white">
            <button
              type="button"
              className="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open sidebar</span>
              {/* <MenuIcon className="h-6 w-6" aria-hidden="true" /> */}
            </button>
          </div>
          <main className="flex-1">
            <div className="py-6">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
              </div>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">{children}</div>
            </div>
          </main>
        </div>
      </div>
    </ConfigProvider>
  );
}
