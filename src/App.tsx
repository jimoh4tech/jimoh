import '@fontsource-variable/space-grotesk';
import { Container,  useColorModeValue } from '@chakra-ui/react';

function App() {
	return (
		<>
      <Container bg={useColorModeValue('black', 'white')}>
        
        <Container maxW={'1200px'} bg={'red'}>
          Just trying out
        </Container>
			</Container>
		</>
	);
}

export default App;
