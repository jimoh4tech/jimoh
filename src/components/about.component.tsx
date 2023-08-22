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
		duration: 'May 2023 - Present (Fulltime)',
		title: 'Lead Backend Engineer, Ijidola Digital Agency',
		descriptions: [
			'Led a team of 3 developers in the design, development and maintenance of a FinPadi financial application using Node.js and Express.js, ensuring data accuracy and compliance with industry regulations.',
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
		duration: 'June 2023 - Present (Contract)',
		title: 'Fullstack Engineer, Bolttech Solutions ',
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
		duration: 'February 2023 - Present (Contract)',
		title: 'Node JS Backend Engineer, Soundmac Global LTD',
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
		duration: 'August 2021 – February 2023 (Fulltime)',
		title: 'Full Stack Engineer, Ilerioluwa Block Industry ',
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
							👋 Hi there! I'm a seasoned Fullstack Engineer with a passion for
							innovation and a track record of success across diverse industries
							including Music Distribution, Fintech, E-commerce, and Digital
							Agency. With proficiency in cutting-edge technologies such as
							TypeScript, React, Express, Node.js, databases, CI/CD, and AWS,
							I've crafted innovative solutions that drive business growth.
							<br />
							<br /> 🚀 My passion for coding is matched by my collaborative
							spirit – I thrive in team environments, fostering synergy and
							bringing projects to life. My keen attention to detail ensures
							that every line of code I write is robust and efficient. <br />
							<br />
							🌐 Whether it's architecting scalable applications or optimizing
							user experiences, I've got a track record of turning ideas into
							reality. My journey through diverse industries has honed my
							adaptability and problem-solving skills, enabling me to excel in
							dynamic, fast-paced settings. <br />
							<br />
							🎯 If you're seeking a proactive Fullstack Engineer who's adept at
							juggling multiple technologies and delivering exceptional results,
							let's connect! I'm eager to contribute my skills and drive
							innovation in your team
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
