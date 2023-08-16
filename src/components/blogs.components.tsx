import {
	Box,
	Card,
	CardBody,
	CardFooter,
	Flex,
	Heading,
	Image,
	Link,
	Stack,
	Text,
	useColorModeValue,
	useMediaQuery,
} from '@chakra-ui/react';

import { BlogCardProps } from '../interfaces/blog.interface';
import { FiArrowRight } from 'react-icons/fi';
import Blog1 from '../assets/b1.png';
import Blog2 from '../assets/b2.png';

const projectList: BlogCardProps[] = [
	{
		description:
			'What happens when you type https://www.google.com in your browser and press Enter.',
		href: 'https://medium.com/@AQ-Jimoh/what-happens-when-you-type-https-www-google-com-in-your-browser-and-press-enter-d625316e6443',
		image: Blog1,
	},
	{
		description: 'Two Largest Number problem',
		href: 'https://medium.com/@AQ-Jimoh/two-largest-number-729ee30718ab',
		image: Blog2,
	},
];

const BlogCard = ({ description, image, href }: BlogCardProps) => {
	return (
		<>
			<Card
				maxW='sm'
				bg={useColorModeValue('#1E1E1E', 'gray.50')}
				color={useColorModeValue('white', 'black')}
			>
				<CardBody>
					<Flex justifyContent={'center'}>
						<Image src={image} />
					</Flex>

					<Stack mt='6' spacing='3'>
						<Text>{description}</Text>
					</Stack>
				</CardBody>

				<CardFooter justifyContent={'space-between'}>
					<Link
						textDecoration={'underline'}
						color={'#18F24F'}
						_hover={{ color: '#18F24F' }}
						href={href}
						key={href}
					>
						<Flex alignItems={'center'} gap={3}>
							Read More <FiArrowRight />
						</Flex>
					</Link>
				</CardFooter>
			</Card>
		</>
	);
};

export const Blogs = () => {
	const [isLessThan1100] = useMediaQuery('(max-width: 1100px)');
	const [isLessThan750] = useMediaQuery('(max-width: 750px)');
	return (
		<>
			<Flex gap={isLessThan1100 ? 5 : 16}>
				<Box bg={'#18F24F'} w={'10px'} />
				<Stack gap={16}>
					<Flex
						flexDir={'column'}
						justifyContent={'space-between'}
						color={useColorModeValue('white', 'black')}
						gap={8}
					>
						<Stack direction={'row'} gap={5}>
							<Box bg={'#18F24F'} w={isLessThan750 ? '13px' : '15px'} />
							<Heading fontSize={isLessThan1100 ? 'lg' : '3xl'}>Blogs</Heading>
						</Stack>
						<Flex gap={5} flexWrap={'wrap'}>
							{projectList.map((p) => (
								<BlogCard key={p.href} {...p} />
							))}
						</Flex>
					</Flex>
				</Stack>
			</Flex>
		</>
	);
};
