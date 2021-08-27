import {ChakraProvider} from '@chakra-ui/react';
import {AppProps} from 'next/app';
import Page from '../components/Page';

const App = ({Component, pageProps}: AppProps): JSX.Element => {
  return (
    <ChakraProvider>
      <Page>
        <Component {...pageProps} />
      </Page>
    </ChakraProvider>
  );
};

export default App;
