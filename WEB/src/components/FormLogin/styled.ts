import styled from "styled-components";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

export const StyledForm = styled(Form)`
	font-family: "Questrial";
	margin-bottom: 80px;

	display: flex;
	flex-direction: column;
	align-items: stretch;

	h3 {
		color: #000000;
		font-size: 24px;
		font-weight: 400;

		margin-bottom: 30px;
	}
`;

export const StyledButton = styled(Button)`
	background-color: #76bb4c;
	border: 1px solid #76bb4c;
	border-radius: 10px;
	color: #000;
	transition: 0.4s ease-in-out;

	&:hover {
		background-color: #ffffff;
		border: solid 1px #76bb4c;
		color: #76bb4c;
	}
`;

export const StyledLink = styled(Link)`
	text-decoration: none;
	color: #555555;
	font-size: 18px;

	&:hover {
		color: #555555;
	}
`;
