import React from 'react';
import { Navbar, Container } from 'react-bootstrap';

const Header = ({ title }) => {
	const navstyle = {
		backgroundColor: 'lightblue',
	};

	return (
		<Navbar
			variant='light'
			style={navstyle}
		>
			<Container>
				<Navbar.Brand
					href='/'
					className='title'
				>
					{title}
				</Navbar.Brand>
			</Container>
		</Navbar>
	);
};

export default Header;
