import React from "react";
import {
	Button,
	Col,
	Form,
	FormControl,
	FormGroup,
	Row,
} from "react-bootstrap";
import fotoUsuario from "../../assets/foto.png";
import "./styles.css";

const Publicar: React.FC = () => {
	return (
		<Form id="feed">
			<FormGroup as={Row} className="mb-3 mt-5" id="pub">
				<img src={fotoUsuario} alt="foto de perfil do usuário" id="foto-pub" />
				<FormControl as="textarea" id="texto-pub" />
			</FormGroup>

			<FormGroup as={Row} className="mb-4" id="container-botao-pub">
				<Button type="submit" id="botao-pub">
					publicar
				</Button>
			</FormGroup>
		</Form>
	);
};

export default Publicar;
