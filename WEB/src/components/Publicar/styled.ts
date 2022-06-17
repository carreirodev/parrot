import styled from "styled-components";
import { Form, FormControl, FormGroup, Button } from "react-bootstrap";

export const FormFeed = styled(Form)`
	width: 100%;
	max-width: 700px;
	border: 1px solid #c5c5c5;
	margin: 0 auto;
`;

export const FormPub = styled(FormGroup)`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;

	width: 100%;
	max-width: 700px;
`;

export const FotoPub = styled.img`
	width: 20%;
	max-width: 70px;
	height: 100%;
	max-height: 70px;

	padding: 0;
	margin-right: 1rem;
`;

export const TextoPub = styled(FormControl)`
    font-family: 'Questrial';
    font-size: 16px;

    width: 80%;
    max-width: 540px;
    height: 70px;
    max-height: 70px;

	border: 1px solid #8bc34a;
	border-radius: 10px;
`;

export const ContainerBotao = styled(FormGroup)`
	display: flex;
    justify-content: end;

    width: 100%;
    max-width: 660px;
`;

export const ButtonPub = styled(Button)`
    font-family: 'Questrial';
    font-size: 16px;
    color: #FFFFFF;

    border: 1px solid #6033aa;
	background: #6033aa;
	border-radius: 30px;

    width: 100%;
    max-width: 150px;
`;
