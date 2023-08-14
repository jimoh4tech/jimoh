import {
	Box,
	Circle,
	Flex,
	Icon,
	Image,
	Link,
	Stack,
	Text,
	useColorModeValue,
} from '@chakra-ui/react';
import { NavIconProps, NavItemProps } from '../interfaces/nav.interfaces';
import {
	FaLinkedin,
	FaTwitter,
	FaGithub,
	FaMediumM,
	FaStackOverflow,
} from 'react-icons/fa';
import Jimoh from '../assets/Jimoh.svg';
import JimoDark from '../assets/Jimoh-dark.svg';

const NavItem = ({ label, href }: NavItemProps) => {
	return (
		<>
			<Link
				_hover={{ color: '#18F24F', borderBottom: '1px' }}
				color={useColorModeValue('white', 'black')}
				href={href}
			>
				{label.toUpperCase()}
			</Link>
		</>
	);
};

const NavIcon = ({ icon, href }: NavIconProps) => {
	return (
		<>
			<Box
				bg={'#18F24F'}
				w={'9'}
				display={'flex'}
				h={'9'}
				justifyContent={'center'}
				alignItems={'center'}
				borderRadius={'md'}
				as={Link}
				href={href}
			>
				<Icon as={icon} />
			</Box>
		</>
	);
};

const NavList = () => {
	const navList: NavItemProps[] = [
		{ label: 'Home', href: '/' },
		{ label: 'About', href: '/about' },
		{ label: 'Project', href: '/project' },
		{ label: 'Blog', href: '/blog' },
		{ label: 'Contact Me', href: '/contact' },
	];
	return (
		<>
			<Stack direction={'row'} gap={10}>
				{navList.map((it) => (
					<NavItem key={it.label} {...it} />
				))}
			</Stack>
		</>
	);
};

const NavIconList = () => {
	const navIcons: NavIconProps[] = [
		{ icon: FaLinkedin, href: '/linn' },
		{ icon: FaTwitter, href: '/lin' },

		{ icon: FaGithub, href: '/li' },

		{ icon: FaMediumM, href: '/linns' },

		{ icon: FaStackOverflow, href: '/lsinn' },
	];
	return (
		<>
			<Stack direction={'row'} gap={3}>
				{navIcons.map((i) => (
					<NavIcon key={i.href} {...i} />
				))}
			</Stack>
		</>
	);
};
export const Navigation = () => {
	return (
		<>
			<Flex
				bg={'#1E1E1E'}
				py={'5'}
				px={'16'}
				justifyContent={'space-between'}
				alignItems={'center'}
			>
				<Box
					color={useColorModeValue('white', 'black')}
					display={'flex'}
					flexDir={'column'}
				>
					<Flex alignItems={'baseline'}>
						<Image src={Jimoh} />
						<Circle bgColor='#18F24F' size='10px' />
					</Flex>
					<Text fontSize={'sm'} letterSpacing={'3px'}>
						ADBUL QUADRI
					</Text>
				</Box>
				<NavList />
				<NavIconList />
			</Flex>
		</>
	);
};
