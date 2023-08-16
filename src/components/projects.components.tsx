import {
	Box,
	Card,
	CardBody,
	CardFooter,
	Flex,
	Heading,
	IconButton,
	Image,
	Link,
	Stack,
	Text,
	useColorModeValue,
	useMediaQuery,
} from '@chakra-ui/react';
import Slider from 'react-slick';
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
import { useState } from 'react';
import { ProjectCardProps } from '../interfaces/project.interface';
import Pyyr1 from '../assets/pyyr1.png';
import Pyyr2 from '../assets/pyyr2.png';
import Pyyr3 from '../assets/pyyr3.png';
import Pyyr4 from '../assets/pyyr4.png';
import Pyyr5 from '../assets/pyyr5.png';
import Pyyr6 from '../assets/pyyr6.png';
import Sound1 from '../assets/sound1.png';
import Sound2 from '../assets/sound2.png';
import Sound3 from '../assets/sound3.png';
import Sound4 from '../assets/sound4.png';
import Ile1 from '../assets/ile1.png';
import Ile2 from '../assets/ile2.png';
import Ile3 from '../assets/ile3.png';
import Ile4 from '../assets/ile4.png';
import Watch1 from '../assets/w1.png';
import Watch2 from '../assets/w2.png';
import Watch3 from '../assets/w3.png';
import Watch4 from '../assets/w4.png';
import Watch5 from '../assets/w5.png';
import Super1 from '../assets/s1.png';

// Settings for the slider
const settings = {
	dots: true,
	arrows: false,
	fade: true,
	infinite: true,
	autoplay: true,
	speed: 500,
	autoplaySpeed: 5000,
	slidesToShow: 1,
	slidesToScroll: 1,
};

const projectList: ProjectCardProps[] = [
	{
		title: 'PYYR Admin portal',
		description:
			'A fintech admin portal that manages all users and transations on the platform to fooster informed decision making, with the use of graphs, charts and among others.',
		links: [{ label: 'Live', href: 'https://pyyr.vercel.app/' }],
		images: [Pyyr1, Pyyr2, Pyyr3, Pyyr4, Pyyr5, Pyyr6],
	},
	{
		title: 'Soundmac Music Distribution',
		description:
			'Music distribution platforms for all class of artists across the globe.',
		links: [{ label: 'Live', href: 'https://www.soundmac.co/' }],
		images: [Sound1, Sound2, Sound3, Sound4],
	},

	{
		title: 'Ilerioluwa Ecommerce',
		description:
			'Ecommerce website for the purchase of building materials with functionalities like add to cart, checkout, and online payment integration.',
		links: [
			{ label: 'Live', href: 'https://ilerioluwa.vercel.app/' },
			{
				label: 'Code',
				href: 'https://github.com/Abu-Abdillah1/ileri-frontend',
			},
		],
		images: [Ile1, Ile2, Ile3, Ile4],
	},
	{
		title: 'Watch Ecommerce',
		description:
			'This is a static website developed with SCSS and very responsive.',
		links: [
			{ label: 'Live', href: 'https://abu-abdillah1.github.io/Watch/' },
			{ label: 'Code', href: 'https://github.com/Abu-Abdillah1/Watch' },
		],
		images: [Watch1, Watch2, Watch3, Watch5, Watch4],
	},
	{
		title: 'Super Exchange',
		description:
			'Currency exchange peer to peer api that can be easily integrated to existing platforms.',
		links: [
			{
				label: 'Docs',
				href: 'https://documenter.getpostman.com/view/15084009/UVyyrsGW',
			},
			{
				label: 'Code',
				href: 'https://github.com/Abu-Abdillah1/super-exchange',
			},
		],
		images: [Super1],
	},
];

export const ProjectCarousel = ({ images }: { images: string[] }) => {
	const [slider, setSlider] = useState<Slider | null>(null);
	const [isLessThan500] = useMediaQuery('(max-width: 500px)');
	const [isLessThan450] = useMediaQuery('(max-width: 450px)');

	return (
		<Box
			position={'relative'}
			overflow={'hidden'}
			maxW={isLessThan450 ? '250px' : isLessThan500 ? '310px' : '350px'}
		>
			{/* CSS files for react-slick */}
			<link
				rel='stylesheet'
				type='text/css'
				href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css'
			/>
			<link
				rel='stylesheet'
				type='text/css'
				href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css'
			/>
			{/* Left Icon */}
			<IconButton
				aria-label='left-arrow'
				bg={'#18F24F'}
				borderRadius='full'
				position='absolute'
				left={'3%'}
				top={'45%'}
				transform={'translate(0%, -50%)'}
				zIndex={2}
				onClick={() => slider?.slickPrev()}
			>
				<BiLeftArrowAlt />
			</IconButton>
			{/* Right Icon */}
			<IconButton
				aria-label='right-arrow'
				bg={'#18F24F'}
				borderRadius='full'
				position='absolute'
				right={'3%'}
				top={'45%'}
				transform={'translate(0%, -50%)'}
				zIndex={2}
				onClick={() => slider?.slickNext()}
			>
				<BiRightArrowAlt />
			</IconButton>
			{/* Slider */}
			<Slider {...settings} ref={(slider) => setSlider(slider)}>
				{images.map((url, index) => (
					<Image src={url} key={index} borderRadius={'lg'} />
				))}
			</Slider>
		</Box>
	);
};

const ProjectCard = ({
	title,
	description,
	images,
	links,
}: ProjectCardProps) => {
	return (
		<>
			<Card
				maxW='sm'
				bg={useColorModeValue('#1E1E1E', 'gray.50')}
				color={useColorModeValue('white', 'black')}
			>
				<CardBody>
					<Flex justifyContent={'center'}>
						<ProjectCarousel images={images} />
					</Flex>

					<Stack mt='6' spacing='3'>
						<Heading size='md' color={'#18F24F'}>
							{title}
						</Heading>
						<Text>{description}</Text>
					</Stack>
				</CardBody>

				<CardFooter justifyContent={'space-between'}>
					{links.map((l) => (
						<Link
							textDecoration={'underline'}
							_hover={{ color: '#18F24F' }}
							href={l.href}
							key={l.label}
						>
							{l.label}
						</Link>
					))}
				</CardFooter>
			</Card>
		</>
	);
};

export const Projects = () => {
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
							<Heading fontSize={isLessThan1100 ? 'lg' : '3xl'}>
								Projects
							</Heading>
						</Stack>
						<Flex gap={5} flexWrap={'wrap'}>
							{projectList.map((p) => (
								<ProjectCard key={p.title} {...p} />
							))}
						</Flex>
					</Flex>
				</Stack>
			</Flex>
		</>
	);
};
