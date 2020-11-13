import {capitalCase} from 'change-case';
import { Layout, Menu, Breadcrumb } from 'antd';
import { useRouter } from 'next/router';
const { Header, Content, Footer } = Layout;

export default function () {
  const router = useRouter();

  return (
    <Breadcrumb style={{ margin: '16px 0' }}>
      <Breadcrumb.Item>Home</Breadcrumb.Item>
      {router.asPath.split('/').map((e) => (
        <Breadcrumb.Item key={e}>{capitalCase(e)}</Breadcrumb.Item>
      ))}
    </Breadcrumb>
  );
}
