import styled from "styled-components";
import { Button } from "react-bootstrap";

export const ContainerUser = styled.div`
	width: 80%;
	max-width: 650px;
	margin: 30px auto;
	display: flex;
	justify-content: space-between;
`;

export const User = styled.div`
	display: flex;
	gap: 20px;

	img {
		height: 90px;
		width: 90px;
	}
`;

export const InfoUser = styled.span`
	display: flex;
	flex-direction: column;
`;

export const Nome = styled.div`
	font-family: "Questrial";
	font-size: 24px;
	color: #76bb4c;
`;

export const BotaoUser = styled(Button)`
	font-family: "Questrial";
	font-size: 16px;
	color: #ffffff;
	border: 1px solid #76bb4c;
	background: #76bb4c;
	border-radius: 30px;
	width: 100%;
	max-width: 90px;
	height: 30px;
	padding: 0;
`;
