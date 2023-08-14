import '@fontsource-variable/space-grotesk';
import { Container, useColorModeValue } from '@chakra-ui/react';
import { Navigation } from './components/nav.components';
import { Footer } from './components/footer.components';
import { Home } from './components/home.components';
import { About } from './components/about.component';

function App() {
	return (
		<>
			<Container
				minW={'100vw'}
				minH={'100vh'}
				bg={useColorModeValue('black', 'white')}
			>
				<Container
					maxW={'1300px'}
					display={'flex'}
					flexDir='column'
					justifyContent={'space-between'}
					minH={'100vh'}
					gap={'100px'}
				>
					<Navigation />
						<Home />
						<About />
					
					<Footer />
				</Container>
			</Container>
		</>
	);
}

export default App;
