import React from "react";
import logoHeader from "../../assets/parrot-header.png";
import { Navbar, Container, NavbarBrand } from "react-bootstrap";
import * as S from "./styled";

const Header: React.FC = () => {
	return (
		<S.StyledNavbar expand="lg">
			<Container>
				<S.StyledNavbarBrand>
					<a href="/">
						<img src={logoHeader} alt="logo do parrot"></img>
					</a>
				</S.StyledNavbarBrand>
				<Navbar.Toggle />
				<Navbar.Collapse className="justify-content-end">
					<S.StyledNavbarText>
						Olá, usuário |{" "}
						<a href="#" id="header-link">
							sair
						</a>
					</S.StyledNavbarText>
				</Navbar.Collapse>
			</Container>
		</S.StyledNavbar>
	);
};

export default Header;
