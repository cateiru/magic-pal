import {Box, Flex} from '@chakra-ui/react';
import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Page: React.FC = ({children}) => {
  return (
    <Flex flexDirection="column" minHeight="100vh" backgroundColor="#1d063b">
      <Box>
        <Header />
        {children}
      </Box>
      <Box marginTop="auto">
        <Footer />
      </Box>
    </Flex>
  );
};

export default Page;
