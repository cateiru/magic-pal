import {Box, Center} from '@chakra-ui/react';
import React from 'react';
import Image from 'next/image';
import title from '../public/title.svg';

const Header: React.FC = React.memo(() => {
  return (
    <Box width="100%">
      <Center>
        <Image src={title} width="400px" />
      </Center>
    </Box>
  );
});

Header.displayName = 'Header';

export default Header;
