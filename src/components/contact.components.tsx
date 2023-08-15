import {
	Box,
	Button,
	Flex,
	Heading,
	Input,
	Link,
	Stack,
	Text,
	Textarea,
	useColorModeValue,
	useMediaQuery,
} from '@chakra-ui/react';


export const Contact = () => {
	const [isLessThan1100] = useMediaQuery('(max-width: 1100px)');
  const [isLessThan750] = useMediaQuery('(max-width: 750px)');
  const [name, setName] = useState
  
	return (
		<>
			<Flex gap={isLessThan1100 ? 5 : 16} id='contact'>
				<Box bg={'#18F24F'} w={'30px'} />
				<Stack gap={16}>
					<Flex
						flexDir={'column'}
						justifyContent={'space-between'}
						color={useColorModeValue('white', 'black')}
						gap={16}
					>
						<Stack direction={'row'} gap={5}>
							<Box bg={'#18F24F'} w={isLessThan750 ? '13px' : '15px'} />
							<Heading fontSize={isLessThan1100 ? 'lg' : '3xl'}>
								Contact
							</Heading>
						</Stack>
						<Flex
							justifyContent={'space-between'}
							gap={10}
							flexDir={isLessThan750 ? 'column' : 'row'}
						>
							<Stack
								bg={useColorModeValue('#1E1E1E', 'gray.50')}
								p={isLessThan750 ? '4' : '10'}
								flex={1}
								gap={5}
							>
								<Text
									fontWeight={'bold'}
									fontSize={isLessThan1100 ? 'md' : 'lg'}
								>
									Get In Touch
								</Text>
								<Text fontSize={isLessThan1100 ? 'sm' : 'md'}>
									Reach out without holding back. I'm willing to help in any way
									I can and am always open to having thoughtful conversations.
									Alternatively, you can follow me on LinkedIn, Twitter, and
									YouTube, my social media channels. As we set out on this
									technological journey together, I eagerly await your feedback.
									Connecting now will help us shape technology's future.
								</Text>
							</Stack>
							<Stack flex={1} gap={5}>
								<Input
									borderColor={useColorModeValue('white', 'black')}
									placeholder='Name'
									_placeholder={{
										color: useColorModeValue('#3f444e', '#cdd2da'),
									}}
								/>
								<Input
									borderColor={useColorModeValue('white', 'black')}
									_placeholder={{
										color: useColorModeValue('#3f444e', '#cdd2da'),
									}}
									type='email'
									placeholder='Email'
								/>
								<Textarea
									borderColor={useColorModeValue('white', 'black')}
									_placeholder={{
										color: useColorModeValue('#3f444e', '#cdd2da'),
									}}
									placeholder='Message'
									rows={7}
								/>
								<Button
									bg={'#18F24F'}
									_hover={{
										bg: useColorModeValue('white', 'black'),
										color: useColorModeValue('black', 'white'),
									}}
                  as={Link}
                  href={`mailto:olamide14044@gmail.com?subject=Testing the world&body=you want to know`}
                  borderBottom={'none'}
								>
									Send Message
								</Button>
							</Stack>
						</Flex>
					</Flex>
				</Stack>
			</Flex>
		</>
	);
};
