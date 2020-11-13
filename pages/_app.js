import 'antd/dist/antd.css';
import "nprogress/nprogress.css";
import dynamic from 'next/dynamic'

import '../styles/globals.css'

import style from '../styles/Home.module.css';
import { Layout, Menu } from 'antd';
import Header from '../components/Header';
import Breadcrumb from '../components/Breadcrumb';
import Footer from '../components/Footer';

const { Content } = Layout;

const TopProgressBar = dynamic(
  () => {
    return import("../components/TopProgressBar");
  },
  { ssr: false },
);

function MyApp({ Component, pageProps }) {
  return (
    <>
      <TopProgressBar />
      <Header />
      <Layout className="layout" className={style.Layout}>
        <Content className={style.Content}>
          <Component {...pageProps} />
        </Content>
        <Footer />
      </Layout>
    </>
  );
}

export default MyApp;
