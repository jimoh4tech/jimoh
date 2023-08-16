import {
	Box,
	Button,
	Flex,
	FormControl,
	Heading,
	Input,
	Stack,
	Text,
	Textarea,
	useColorModeValue,
	useMediaQuery,
	useToast,
} from '@chakra-ui/react';
import { useFormik } from 'formik';
import { send } from '@emailjs/browser';

export const Contact = () => {
	const [isLessThan1100] = useMediaQuery('(max-width: 1100px)');
	const [isLessThan750] = useMediaQuery('(max-width: 750px)');
	const toast = useToast();

	const formik = useFormik({
		initialValues: {
			name: '',
			email: '',
			message: '',
		},
		async onSubmit(values) {
			console.log(values);
      const res =await send(
				process.env.REACT_APP_EMAILJS_SERVICE_ID || '',
				'contact_me',
				values,
				process.env.REACT_APP_EMAILJS_API_KEY || ''
      );
      console.log(res);
			toast({
				title: 'Message Sent',
				description: "Thanks for reaching out to me, I would get back to you shortly.",
				status: 'success',
				duration: 9000,
				position: 'top-right',
        isClosable: true,
			});
		},
	});

	return (
		<>
			<Flex gap={isLessThan1100 ? 5 : 16} >
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
							<Stack flex={1}>
								<form onSubmit={formik.handleSubmit}>
									<Stack gap={5}>
										<FormControl>
											<Input
												borderColor={useColorModeValue('white', 'black')}
												placeholder='Name'
												_placeholder={{
													color: useColorModeValue('#3f444e', '#cdd2da'),
												}}
												name='name'
												value={formik.values.name}
												onChange={formik.handleChange}
											/>
										</FormControl>
										<FormControl>
											<Input
												borderColor={useColorModeValue('white', 'black')}
												_placeholder={{
													color: useColorModeValue('#3f444e', '#cdd2da'),
												}}
												type='email'
												name='email'
												placeholder='Email'
												value={formik.values.email}
												onChange={formik.handleChange}
											/>
										</FormControl>
										<FormControl>
											<Textarea
												borderColor={useColorModeValue('white', 'black')}
												_placeholder={{
													color: useColorModeValue('#3f444e', '#cdd2da'),
												}}
												placeholder='Message'
												rows={7}
												name='message'
												value={formik.values.message}
												onChange={formik.handleChange}
											/>
										</FormControl>
										<Button
											bg={'#18F24F'}
											_hover={{
												bg: useColorModeValue('white', 'black'),
												color: useColorModeValue('black', 'white'),
											}}
                      type='submit'
                      isLoading={formik.isSubmitting}
										>
											Send Message
										</Button>
									</Stack>
								</form>
							</Stack>
						</Flex>
					</Flex>
				</Stack>
			</Flex>
		</>
	);
};
