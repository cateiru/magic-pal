import {Box} from '@chakra-ui/react';
import React from 'react';
import Header from './Header';

const Page: React.FC = ({children}) => {
  return (
    <Box backgroundColor="#1d063b" minHeight="100vh">
      <Header />
      {children}
    </Box>
  );
};

export default Page;
