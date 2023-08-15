import {
	Box,
	Flex,
	Heading,
	List,
	ListIcon,
	ListItem,
	Stack,
	Text,
	UnorderedList,
	useColorModeValue,
	useMediaQuery,
} from '@chakra-ui/react';
import { BiCodeAlt } from 'react-icons/bi';

interface ExperienceProps {
	label?: string;
	duration: string;
	title: string;
	descriptions: string[];
}

const experinceList: ExperienceProps[] = [
	{
		label: 'Education',
		duration: 'NOVEMBER 2017 - DECEMBER 2022',
		title: 'Federal University Dutsin-Ma, December',
		descriptions: [
			'Bachelor of Science in Computer Science & IT - First Class Honors',
		],
	},
	{
		label: 'Work Experience',
		duration: 'February 2023 - Present (Contract)',
		title: 'Node JS Backend Engineer, Soundmac Global LTD',
		descriptions: [
			'Design and implement RESTful APIs to enable efficient distribution of music by the users using Node.js, TypeScript, MongoDB.',
			'Implement user authentication and authorization using JWT.',
			'Design, implement and optimize databases, queries, and data models.',
			'Write clean, maintainable, and efficient code.',
		],
	},
	{
		duration: 'August 2021 - Present (Contract)',
		title: 'Full Stack Engineer, Ilerioluwa Block Industry ',
		descriptions: [
			'Develop fully functional responsive ecommerce application for selling building materials with scalable and efficient web applications using MERN Stack (MongoDB, Express, React, Node.js)',
			'Design and implement RESTful APIs to interface with front-end applications.',
			'Implement user authentication and authorization using JWT.',
			'Troubleshoot and debug issues across the full stack',
			'Write automated tests to ensure code quality and maintainability',
			'Automated pipeline using GitHub workflow to automated CI/CD process',
			'Engage with other parts of the Engineering/Development team as well as the Product function to facilitate the development & delivery of platform functionality requirements',
			'Write clean, maintainable, and efficient code',
			'Contribute to the conversation to bring ideas on improvement, technology development, and iteration',
		],
	},
	{
		duration: 'March 2021 - August 2021',
		title: 'Access Solutions LTD (Software Engineer Intern)',
		descriptions: [
			'Collaborated with senior software engineers to design, develop, and test software applications',
			`Contributed to the development of a new feature for the company's flagship product using Java and MySQL`,
			'Participated in code reviews and provided feedback to improve code quality',
			'Documented software design and implementation details',
			'Assisted in troubleshooting and resolving software defects',
			'Automated pipeline using GitHub workflow to automated CI/CD process',
			'Engage with other parts of the Engineering/Development team as well as the Product function to facilitate the development & delivery of platform functionality requirements',
			'Write clean, maintainable, and efficient code',
			'Contribute to the conversation to bring ideas on improvement, technology development, and iteration',
		],
	},
];

const Experince = ({
	label,
	duration,
	title,
	descriptions,
}: ExperienceProps) => {
	const [isLessThan1100] = useMediaQuery('(max-width: 1100px)');
	const [isLessThan750] = useMediaQuery('(max-width: 750px)');
	return (
		<>
			<Flex
				flexDir={'column'}
				justifyContent={'space-between'}
				color={useColorModeValue('white', 'black')}
				gap={8}
			>
				<Stack direction={'row'} gap={5}>
					<Box bg={'#18F24F'} w={isLessThan750 ? '13px' : '15px'} />
					<Heading fontSize={isLessThan1100 ? 'lg' : '3xl'}>{label}</Heading>
				</Stack>
				<Stack>
					<Text textTransform={'uppercase'}>{duration}</Text>
					<Text textTransform={'uppercase'} color={'#18F24F'}>
						{title}
					</Text>
					<UnorderedList fontSize={'sm'}>
						{descriptions.map((d) => (
							<ListItem key={d}>{d}</ListItem>
						))}
					</UnorderedList>
				</Stack>
			</Flex>
		</>
	);
};

const Skills = () => {
	const [isLessThan1100] = useMediaQuery('(max-width: 1100px)');
	const [isLessThan750] = useMediaQuery('(max-width: 750px)');
	const set1 =
    ' JavaScript, TypeScript, Java, C, Python, HTML, CSS, SCSS, Tailwind CSS';
  const set2 =
    ' React JS, Next JS, Node JS, Express JS, Nest JS, MongoDB, PostgreSQL, MySQL, SQLite, REST API, GraphQL';
  const set3 = ' Git, Docker, CI/CD Pipeline, Jest, Shell, AWS';

	return (
		<>
			<Flex
				flexDir={'column'}
				justifyContent={'space-between'}
				color={useColorModeValue('white', 'black')}
				gap={8}
				key={'skills'}
			>
				<Stack direction={'row'} gap={5}>
					<Box bg={'#18F24F'} w={isLessThan750 ? '13px' : '15px'} />
					<Heading fontSize={isLessThan1100 ? 'lg' : '3xl'}>Skills</Heading>
				</Stack>
				<Flex
					justifyContent={'space-between'}
					flexDir={isLessThan750 ? 'column' : 'row'}
					gap={3}
				>
					<List>
						{set1.split(',').map((l) => (
							<ListItem key={l} fontSize={'sm'}>
								<ListIcon as={BiCodeAlt} color={'#18F24F'} />
								{l}
							</ListItem>
						))}
					</List>
					<List>
						{set2.split(',').map((l) => (
							<ListItem key={l} fontSize={'sm'}>
								<ListIcon as={BiCodeAlt} color={'#18F24F'} />
								{l}
							</ListItem>
						))}
					</List>
					<List>
						{set3.split(',').map((l) => (
							<ListItem key={l} fontSize={'sm'}>
								<ListIcon as={BiCodeAlt} color={'#18F24F'} />
								{l}
							</ListItem>
						))}
					</List>
				</Flex>
			</Flex>
		</>
	);
};

export const About = () => {
	const [isLessThan1100] = useMediaQuery('(max-width: 1100px)');
	const [isLessThan750] = useMediaQuery('(max-width: 750px)');
	return (
		<>
			<Flex gap={isLessThan1100 ? 5 : 16} id='about'>
				<Box bg={'#18F24F'} w={'30px'} />
				<Stack gap={16}>
					<Flex
						flexDir={'column'}
						justifyContent={'space-between'}
						color={useColorModeValue('white', 'black')}
            gap={8}
            key={'about'}
					>
						<Stack direction={'row'} gap={5}>
							<Box bg={'#18F24F'} w={isLessThan750 ? '13px' : '15px'} />
							<Heading fontSize={isLessThan1100 ? 'lg' : '3xl'}>
								About me
							</Heading>
						</Stack>
						<Text fontSize={isLessThan1100 ? 'sm' : 'md'}>
							A motivated Full Stack (MERN) engineer with at least two years of
							experience. capable of converting product design specifications
							into user interfaces using JavaScript, Node.js, React, and other
							related technologies. competent in TypeScript, server-side
							technologies, database technologies, unit testing frameworks, Git,
							debugging, and troubleshooting. outstanding understanding of web
							application architecture and design patterns. knowledge of cloud
							platforms, agile development methods, and docker. hold a
							bachelor's degree in computer science and information technology.
						</Text>
					</Flex>
					{experinceList.map((ex) => (
						<Experince key={ex.title} {...ex} />
					))}
					<Skills />
				</Stack>
			</Flex>
		</>
	);
};
