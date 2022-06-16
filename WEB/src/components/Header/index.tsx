import React from "react";
import logoHeader from "../../assets/parrot-header.png";
import { Navbar, Container, NavbarBrand } from "react-bootstrap";

import "../../global/styles.css";
const Header: React.FC = () => {
	return (
		<Navbar expand="lg" id="header">
			<Container>
				<NavbarBrand>
					<a href="/"><img src={logoHeader} alt="logo do parrot" id="header-img"></img></a> 
				</NavbarBrand>
				<Navbar.Toggle />
				<Navbar.Collapse className="justify-content-end">
					<Navbar.Text id="header-texto">
                        Olá, usuário | <a href="#" id="header-link">sair</a>
					</Navbar.Text>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default Header;
