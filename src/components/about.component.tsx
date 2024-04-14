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
		label: 'Work Experience',
		duration: 'May 2023 - Present (Fulltime)',
		title:
			'Lead Backend Engineer | FinPadi Technologies Limited | Lagos, Nigeria | Remote',
		descriptions: [
			'Led a team of 7 backend engineers in the architecting, developing, and maintaining of a FinPadi financial application using Node.js and Express.js, ensuring data accuracy and compliance with industry regulations.',
			'Collaborated with cross-functional teams to identify user needs, gather feedback, and iterate on features to enhance the overall user journey and ensure alignment with business goals.',
			'Implemented robust authentication and authorization mechanisms using JWT, enhancing system security.',
			'Spearheaded the design and implementation of comprehensive test strategies, resulting in a 45% reduction in bugs and improved software reliability.',
			'Designed and established an automated CI/CD pipeline, reducing deployment time by 65% and enhancing overall development efficiency, thus enabling rapid feature releases.',
			'Utilized AWS EC2, S3, and RDS to create a secure and scalable cloud infrastructure for the application.',
			'Participated in code reviews, providing constructive feedback, and ensuring code quality and best practices.',
			'Optimized database queries, indexes, and introduced caching mechanisms, reducing query response times by 40% and ensuring smooth content retrieval for users.',
			'Mentored junior engineers, conducted code reviews, and promoted the adoption of coding standards and design patterns.',
			'Collaborated with QA teams to ensure the delivery of high-quality software and resolve issues in a timely manner.',
		],
	},
	{
		duration: 'October 2023 - JANUARY 2024 (Contract)',
		title:
			'Backend Engineer | Lassod Consulting Limited | London, UK | Remote ',
		descriptions: [
			'Collaborated with diverse team of developers across the globe to contribute key features to the existing Oyoyo Event App project',
			'Integrated Elastic Search to the system, then ingest the current data in the Postgres database to facilitate a sync. Hence, fostering swift and efficient search of the database.',
			'Developed an ordering system (with rating and review capabilities) to enable users have fair assessment on available vendors. Integrated Payment gateway and developed a simple wallet system in the app.',
			'Migrated some part of the codebase from JavaScript to TypeScript and engaged in code optimization.•	Migrated some part of the codebase from JavaScript to TypeScript and engaged in code optimization.',
		],
	},
	{
		duration: 'June 2023 - October 2023 (Contract)',
		title: 'Frontend Engineer | Pyyr | Lagos, Nigeria | Remote',
		descriptions: [
			'Developed and maintained an efficient admin portal for a fintech solution using React and TypeScript, enabling effective management of financial data.',
			'Collaborated closely with backend developers and UX/UI designers to ensure seamless integration and exceptional user experience.',
			'Implemented responsive designs using Chakra UI to deliver a consistent user experience across devices.',
			'Implemented various data visualization components including line charts, bar graphs, and tables using Rechart.js, delivering insightful data analytics for clients.',
			'Created interactive tables with filtering and sorting capabilities to facilitate efficient data exploration.',
			'Integrated APIs and web services to fetch and display real-time data, improving the decision-making process for financial professionals.',
			'Integrated user authentication and role-based access control to manage permissions effectively and ensure data security and confidentiality.',
			'Conducted unit testing using Jest and React Testing Library to ensure code quality and functionality.',
			'Actively participated in code reviews, maintaining high code quality standards, and fostering a collaborative development environment.',
			"Received positive feedback from stakeholders for the portal's intuitive design and data visualization features.",
		],
	},
	{
		duration: 'February 2023 - JULY 2023 (Contract)',
		title:
			'Node JS Backend Engineer | Soundmac Global Limited | Lagos, Nigeria | Remote ',
		descriptions: [
			'Collaborated with cross-functional teams to design, develop, and implement backend solutions for content distribution, resulting in a 45% increase in delivery efficiency.',
			'Built RESTful APIs using Node.js, Express.js, MongoDB, and TypeScript for seamless integration between various platforms, facilitating streamlined content sharing and distribution among artists and partners.',
			'Developed real-time data processing modules to enhance analytics capabilities, leading to data-driven insights for content strategy decisions.',
			'Implemented user authentication and authorization mechanisms, enhancing security for artist accounts and copyrighted content.',
			'Optimized database queries, indexes, and introduced caching mechanisms, reducing query response times by 35% and ensuring smooth content retrieval for users.',
			'Participated in code reviews, contributing to a culture of code quality and knowledge sharing within the development team.',
			'Created comprehensive unit tests and integration tests, achieving a test coverage of over 80% and reducing bugs in production.',
			'Implemented a CI/CD pipeline using GitHub Actions, automating the deployment process, and reducing release cycles by 55%.',
		],
	},
	{
		duration: 'August 2021 - February 2023 (Fulltime)',
		title:
			'Full Stack Engineer | Ilerioluwa Block Industry | Lagos, Nigeria | Hybrid ',
		descriptions: [
			'Developed and maintained the frontend of the building company ecommerce platform using React, ensuring seamless user experiences and responsive design.',
			'Designed and implemented RESTful APIs using Node.js, TypeScript, and Express, enabling efficient communication between frontend and backend systems.',
			'Implemented efficient test-driven development practices, achieving a 40% reduction in bug rates.',
			'Integrated CI/CD pipelines using tools such as GitHub Actions, automating deployment and reducing release cycles by 45%.',
			'Continuously discover, evaluate, and implement new technologies to improve development efficiency.',
			'Collaborated with UX/UI designers to transform wireframes and mock-ups into functional and visually appealing web components.',
			'Implemented secure user authentication and authorization mechanisms to protect customer data.',
			'Enhanced website performance, resulting in a 30% decrease in page load times through frontend optimizations.',
			'Utilized MongoDB for database management, ensuring data consistency and optimizing queries for enhanced performance and scalability.',
			'Participated in Agile ceremonies, providing valuable insights during sprint planning and retrospectives.',
		],
	},
	{
		duration: 'March 2021 - August 2021 (Intern)',
		title:
			'Software Engineer Intern | Access Solutions Limited | Abuja, Nigeria | Onsite ',
		descriptions: [
			'Collaborated with senior software engineers to design, develop, and test software applications',
			`Contributed to the development of a new feature for the company's flagship product using Java and MySQL`,
			'Participated in code reviews and provided feedback to improve code quality',
			'Documented software design and implementation details',
			'Assisted in troubleshooting and resolving software defects',
		],
	},
	{
		label: 'Education',
		duration: 'NOVEMBER 2017 - DECEMBER 2022',
		title: 'Federal University Dutsin-Ma, December',
		descriptions: [
			'Bachelor of Science in Computer Science & IT - First Class Honors (4.78/5.0)',
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
		' React JS, Next JS, Node JS, Express JS, Nest JS, MongoDB, PostgreSQL, Elastic Search, MySQL, SQLite, REST API, GraphQL';
	const set3 = ' Git, Docker, CI/CD Pipeline, Jest, Shell, AWS';

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
			<Flex gap={isLessThan1100 ? 5 : 16}>
				<Box bg={'#18F24F'} w={'30px'} />
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
								About me
							</Heading>
						</Stack>
						<Text fontSize={isLessThan1100 ? 'sm' : 'md'} textAlign={'justify'}>
							Backend Engineer with 3+ years of working experience in designing
							and developing scalable web applications and diverse background
							spanning Fintech, E-commerce, Event Planning, and Digital Agency.
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
