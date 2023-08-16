import '@fontsource-variable/space-grotesk';
import { Container, useColorModeValue, useMediaQuery } from '@chakra-ui/react';
import { Navigation } from './components/nav.components';
import { Footer } from './components/footer.components';
import { Home } from './components/home.components';
import { About } from './components/about.component';
import { Contact } from './components/contact.components';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Projects } from './components/projects.components';
import { Blogs } from './components/blogs.components';

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
					gap={isLessThan750 ? '50px' : '100px'}
					minH={'100vh'}
				>
					<Navigation />
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/about' element={<About />} />
						<Route path='/contact' element={<Contact />} />
						<Route path='/projects' element={<Projects />} />
						<Route path='/blogs' element={<Blogs />} />
						<Route path='*' element={<Navigate to='/' />} />
					</Routes>

					<Footer />
				</Container>
			</Container>
		</>
	);
}

export default App;
