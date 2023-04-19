import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import style from '../../assets/css/header.module.css';

//
const Header = ({ logo }) => {
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
					className={style.logo}
				>
					{logo}
				</Navbar.Brand>
			</Container>
		</Navbar>
	);
};

export default Header;
