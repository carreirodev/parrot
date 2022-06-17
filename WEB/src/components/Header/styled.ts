import styled from "styled-components";
import { Navbar, Container, NavbarBrand } from "react-bootstrap";

export const StyledNavbar = styled(Navbar)`
	background: #ffffff;
	box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.08);
`;

export const StyledNavbarBrand = styled(NavbarBrand)`
	img {
		max-height: 62px;
	}
`;

export const StyledNavbarText = styled(Navbar.Text)`
	color: #76bb4c !important;
	font-size: 24px;

	a {
		color: #6033aa !important;
		font-size: 16px;
		text-decoration: none;
	}
`;
