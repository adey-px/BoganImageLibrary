import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import { ReactComponent as Logo } from '../../assets/img/logo.svg';

//
const Header = () => {
	const logo = {
		maxWidth: '12rem',
		maxHeight: '3rem',
	};

	const navbar = {
		backgroundColor: '#2B547E',
	};

	return (
		<Navbar
			variant='light'
			style={navbar}
		>
			<Container>
				<Navbar.Brand href='/'>
					<Logo style={logo} />
				</Navbar.Brand>
			</Container>
		</Navbar>
	);
};

export default Header;
