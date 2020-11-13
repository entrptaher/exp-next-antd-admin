import Link from 'next/link';
import { useRouter } from 'next/router';
import { Layout, Menu, Breadcrumb } from 'antd';

const { Header, Content, Footer } = Layout;

export default function Home() {
  const router = useRouter();

  return (
    <Header>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[router.route]}>
        <Menu.Item key="/">
          <Link href="/">Home</Link>
        </Menu.Item>

        <Menu.Item key="/sites/example">
          <Link href="/sites/example">Example</Link>
        </Menu.Item>

        <Menu.Item key="/sites/hackernews">
          <Link href="/sites/hackernews">Hackernews</Link>
        </Menu.Item>

        <Menu.Item key="/sites/indeed">
          <Link href="/sites/indeed">Indeed</Link>
        </Menu.Item>

        <Menu.Item key="/sites/psychologytoday">
          <Link href="/sites/psychologytoday">Psychology Today</Link>
        </Menu.Item>
      </Menu>
    </Header>
  );
}
