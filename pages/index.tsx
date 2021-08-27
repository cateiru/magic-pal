import IndexPage from '../components/IndexPage';
import Head from 'next/head';

const index = () => {
  return (
    <>
      <Head>
        <title>Magic pal</title>
      </Head>
      <IndexPage />
    </>
  );
};

export default index;
