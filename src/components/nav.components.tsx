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

const navList: NavItemProps[] = [
	{ label: 'Home', href: '#home' },
	{ label: 'About', href: '#about' },
	{ label: 'Project', href: '#project' },
	{ label: 'Blog', href: '#blog' },
	{ label: 'Contact Me', href: '#contact' },
];

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
				target='blank'
			>
				<Icon as={icon} />
			</Box>
		</>
	);
};

const NavList = () => {
	const [isLessThan1000] = useMediaQuery('(max-width: 1000px)');
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

export const NavIconList = ({ isFooter }: { isFooter: boolean }) => {
	const [isLessThan1000] = useMediaQuery('(max-width: 1000px)');
	const navIcons: NavIconProps[] = [
		{
			icon: FaLinkedin,
			href: 'http://www.linkedin.com/in/abdul-quadri-jimoh-69369714a',
		},
		{ icon: FaTwitter, href: 'https://twitter.com/abu4code' },

		{ icon: FaGithub, href: 'https://github.com/Abu-Abdillah1' },

		{ icon: FaMediumM, href: 'https://medium.com/@AQ-Jimoh' },

		{
			icon: FaStackOverflow,
			href: 'https://stackoverflow.com/users/20951272/abdul-quadri-jimoh',
		},
	];
	return (
		<>
			<Flex
				direction={'row'}
				justifyContent={'space-between'}
				flex={isFooter ? 0 : 2}
				display={!isLessThan1000 || isFooter ? 'flex' : 'none'}
				gap={2}
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

export const Signature = ({ isFooter }: { isFooter: boolean }) => {
	const [isLessThan1000] = useMediaQuery('(max-width: 1000px)');
	return (
		<>
			<Box
				color={useColorModeValue('white', 'black')}
				display={'flex'}
				flexDir={'column'}
				flex={isFooter ? 0 : 1}
				cursor={'pointer'}
			>
				<Flex alignItems={'baseline'}>
					<Box w={isLessThan1000 ? '20' : '30'}>
						<Image src={Jimoh} />
					</Box>
					<Circle bgColor='#18F24F' size={isLessThan1000 ? '7px' : '10px'} />
				</Flex>
				<Text
					fontSize={isLessThan1000 ? 'xs' : 'sm'}
					letterSpacing={isLessThan1000 ? '1px' : '3px'}
					whiteSpace={'nowrap'}
				>
					ADBUL QUADRI
				</Text>
			</Box>
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
				<Signature isFooter={false} />
				<NavList />
				<NavIconList isFooter={false} />
				<MobileNav />
			</Flex>
		</>
	);
};
