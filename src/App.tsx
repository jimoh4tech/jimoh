import '@fontsource-variable/space-grotesk';
import { Container,  useColorModeValue } from '@chakra-ui/react';
import { Navigation } from './components/nav.components';

function App() {
	return (
		<>
      <Container minW={'100vw'} minH={'100vh'} bg={useColorModeValue('black', 'white')}>
        <Container maxW={'1300px'} >
          <Navigation />
        </Container>
			</Container>
		</>
	);
}

export default App;
