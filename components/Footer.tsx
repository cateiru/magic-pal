import {Box, Center, Link} from '@chakra-ui/react';
import React from 'react';

const Footer = React.memo(() => {
  return (
    <Box
      as="footer"
      role="contentinfo"
      mx="auto"
      maxW="7xl"
      py="12"
      px={{base: '4', md: '8'}}
    >
      <Center>
        <Link
          href="https://github.com/yuto51942/magic-pal"
          isExternal
          color="white"
        >
          GitHub
        </Link>
      </Center>
    </Box>
  );
});

Footer.displayName = 'footer';

export default Footer;
