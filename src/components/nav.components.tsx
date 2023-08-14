import {
	Box,
	Circle,
	Drawer,
	DrawerCloseButton,
	DrawerContent,
	DrawerOverlay,
	Flex,
	Icon,
	IconButton,
	Image,
	Link,
	Stack,
	Text,
	useColorModeValue,
	useDisclosure,
	useMediaQuery,
} from '@chakra-ui/react';
import { NavIconProps, NavItemProps } from '../interfaces/nav.interfaces';
import {
	FaLinkedin,
	FaTwitter,
	FaGithub,
	FaMediumM,
	FaStackOverflow,
} from 'react-icons/fa';
import { FiMenu } from 'react-icons/fi';
import Jimoh from '../assets/Jimoh.svg';
// import JimoDark from '../assets/Jimoh-dark.svg';

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
	const [isLessThan1000] = useMediaQuery('(max-width: 1000px)');
	const navList: NavItemProps[] = [
		{ label: 'Home', href: '/' },
		{ label: 'About', href: '/about' },
		{ label: 'Project', href: '/project' },
		{ label: 'Blog', href: '/blog' },
		{ label: 'Contact Me', href: '/contact' },
	];
	return (
		<>
			<Flex
				direction={'row'}
				justifyContent={'space-evenly'}
				flex={5}
				display={isLessThan1000 ? 'none' : 'flex'}
			>
				{navList.map((it) => (
					<NavItem key={it.label} {...it} />
				))}
			</Flex>
		</>
	);
};

const NavIconList = () => {
	const [isLessThan1000] = useMediaQuery('(max-width: 1000px)');
	const navIcons: NavIconProps[] = [
		{ icon: FaLinkedin, href: '/linn' },
		{ icon: FaTwitter, href: '/lin' },

		{ icon: FaGithub, href: '/li' },

		{ icon: FaMediumM, href: '/linns' },

		{ icon: FaStackOverflow, href: '/lsinn' },
	];
	return (
		<>
			<Flex
				direction={'row'}
				justifyContent={'space-between'}
				flex={2}
				display={isLessThan1000 ? 'none' : 'flex'}
			>
				{navIcons.map((i) => (
					<NavIcon key={i.href} {...i} />
				))}
			</Flex>
		</>
	);
};

const MobileNav = () => {
	const [isLessThan1000] = useMediaQuery('(max-width: 1000px)');
	const { isOpen, onOpen, onClose } = useDisclosure();
	const navList: NavItemProps[] = [
		{ label: 'Home', href: '/' },
		{ label: 'About', href: '/about' },
		{ label: 'Project', href: '/project' },
		{ label: 'Blog', href: '/blog' },
		{ label: 'Contact Me', href: '/contact' },
	];

	if (!isLessThan1000) return <></>;
	return (
		<>
			<IconButton
				onClick={onOpen}
				variant='outline'
				aria-label='open menu'
				icon={<FiMenu color='#FFFFFF' />}
			/>

			<Drawer isOpen={isOpen} placement='right' onClose={onClose} size={'sm'}>
				<DrawerOverlay />
				<DrawerContent bg={'black'}>
					<DrawerCloseButton color={'white'} />

					<Stack p={10} gap={7}>
						{navList.map((l) => (
							<NavItem key={l.label} {...l} />
						))}
					</Stack>
				</DrawerContent>
			</Drawer>
		</>
	);
};
export const Navigation = () => {
	const [isLessThan1100] = useMediaQuery('(max-width: 1100px)');
	const [isLessThan1000] = useMediaQuery('(max-width: 1000px)');
	return (
		<>
			<Flex
				bg={'#1E1E1E'}
				py={'5'}
				px={isLessThan1000 ? '5' : '16'}
				justifyContent={'space-between'}
				alignItems={'center'}
				gap={isLessThan1100 ? 0 : 10}
			>
				<Box
					color={useColorModeValue('white', 'black')}
					display={'flex'}
					flexDir={'column'}
					flex={1}
					cursor={'pointer'}
				>
					<Flex alignItems={'baseline'}>
						<Box w={isLessThan1000 ? '20' : '30'}>
							<Image src={Jimoh} />
						</Box>
						<Circle bgColor='#18F24F' size='10px' />
					</Flex>
					<Text
						fontSize={isLessThan1000 ? 'xs' : 'sm'}
						letterSpacing={isLessThan1000 ? '1px' : '3px'}
						whiteSpace={'nowrap'}
					>
						ADBUL QUADRI
					</Text>
				</Box>
				<NavList />
				<NavIconList />

				<MobileNav />
			</Flex>
		</>
	);
};
