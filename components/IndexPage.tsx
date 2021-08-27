import {Box, Flex, Text} from '@chakra-ui/react';
import React from 'react';
import {useRouter} from 'next/router';

const IndexPage = () => {
  const [timer, setTimer] = React.useState(10);
  const router = useRouter();

  React.useEffect(() => {
    if (timer === 0) {
      router.push('https://maidragon.jp/2nd/');
    }

    const id = setInterval(() => {
      setTimer(timer - 1);
    }, 1000);
    return () => {
      clearInterval(id);
    };
  }, [timer]);

  return (
    <Box height="100%">
      <Flex flexDirection="column" justifyContent="center" alignItems="center">
        <Text fontSize="2rem" color="white" fontWeight="bold">
          魔法をかけてください
        </Text>
        <Text fontSize="2rem" color="white" fontWeight="bold">
          あと、{timer}秒
        </Text>
      </Flex>
    </Box>
  );
};

export default IndexPage;
