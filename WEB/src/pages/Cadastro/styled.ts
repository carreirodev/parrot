import styled from "styled-components";
import { Card } from "react-bootstrap";

export const Fundo = styled.div`
	img {
		background-position: center;
		background-size: cover;
		background-repeat: no-repeat;
		width: 100vw;
		height: 100vh;
	}
`;

export const Layer = styled.div`
	background: rgba(0, 0, 0, 0.8);
	position: absolute;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;

	display: flex;
	align-items: center;
	justify-content: center;
`;

export const Box = styled(Card)`
	width: 480px;
	max-height: 98vh;

	background: #ffffff;
	border: 1px solid #c5c5c5;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	img {
		max-width: 170px;
        height:100%;
        width: 100%;
		margin: 30px auto;
	}
`;
