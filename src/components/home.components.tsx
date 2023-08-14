import {
	Box,
	Button,
	Flex,
	Heading,
	Image,
	Text,
	useColorModeValue,
	useMediaQuery,
} from '@chakra-ui/react';
import Icon from '../assets/icon.svg';
import Typewriter from 'typewriter-effect';

export const Home = () => {
	const [isLessThan1100] = useMediaQuery('(max-width: 1100px)');
	const [isLessThan750] = useMediaQuery('(max-width: 750px)');
	return (
		<>
			<Flex gap={isLessThan1100 ? 5 : 16} id='home'   >
				<Box bg={'#18F24F'} w={isLessThan750 ? '3px' : '7px'} />
				<Flex
					flexDir={'column'}
					justifyContent={'space-between'}
					color={useColorModeValue('white', 'black')}
					flex={2}
					gap={10}
				>
					<Heading fontSize={isLessThan1100 ? 'lg' : '3xl'}>
						<Typewriter
							options={{
								strings: [
									'Welcome to my website',
									'Welcome to my portfolio',
									`I'm a FullStack Engineer`,
									`I'm a Passionate Backend Engineer`,
									`I'm a Curious Frontend Engineer`,
								],
								autoStart: true,
								loop: true,
								deleteSpeed: 50,
							}}
						/>{' '}
					</Heading>
					<Text fontSize={isLessThan1100 ? 'sm' : 'md'}>
						I'm delighted to have you here, exploring my digital showcase of
						creativity, skills, and passion for all things development. This
						website is a reflection of my journey as a developer and an
						opportunity for me to share my projects, experiences, and expertise
						with you. I hope that my work inspires you, sparks new ideas, and
						showcases the depth of my commitment to the craft of software
						development. I look forward to connecting with you and exploring the
						possibilities together. Happy exploring! 💻🌟
					</Text>
					<Button bg={'#18F24F'} width={'170px'} bgSize={'xs'}>
						DOWNLOAD CV
					</Button>
				</Flex>
				<Box
					flex={isLessThan1100 ? 1 : 2}
          display={isLessThan750 ? 'none' : 'flex'}
          maxW={'370px'}
				>
					<Image src={Icon} alt='icon' />
				</Box>
			</Flex>
		</>
	);
};
