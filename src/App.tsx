import '@fontsource-variable/space-grotesk';
import { Container, useColorModeValue, useMediaQuery } from '@chakra-ui/react';
import { Navigation } from './components/nav.components';
import { Footer } from './components/footer.components';
import { Home } from './components/home.components';
import { About } from './components/about.component';
import { Contact } from './components/contact.components';

function App() {
	const [isLessThan750] = useMediaQuery('(max-width: 750px)');
	return (
		<>
			<Container minW={'100vw'} bg={useColorModeValue('black', 'white')}>
				<Container
					maxW={'1300px'}
					display={'flex'}
					flexDir='column'
					justifyContent={'space-between'}
					gap={isLessThan750 ? '50px': '150px'}
				>
					<Navigation />
					<Home />
					<About />
					<Contact />

					<Footer />
				</Container>
			</Container>
		</>
	);
}

export default App;
