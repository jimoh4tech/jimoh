import {
	Flex,
	Text,
	useColorModeValue,
  useMediaQuery,
} from '@chakra-ui/react';

import { NavIconList, Signature } from './nav.components';

export const Footer = () => {
  const [isLessThan700] = useMediaQuery('(max-width: 700px)');
	return (
    <Flex
      p={5}
			bg={useColorModeValue('#1E1E1E', 'gray.900')}
      color={useColorModeValue('white', 'black')}
      justifyContent={'space-between'}
      alignItems={'center'}
      gap={5}
      flexDir={isLessThan700 ? 'column' : 'row'}
		>
      <Signature isFooter={true} />
			<Text>© {new Date().getFullYear()} All Rights Reserved</Text>
			<NavIconList isFooter={true} />
		</Flex>
	);
};
