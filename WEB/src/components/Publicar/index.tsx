import React from "react";
import { Button, Form, FormControl, FormGroup, Row } from "react-bootstrap";
import fotoUsuario from "../../assets/foto.png";
import * as S from "./styled";

const Publicar: React.FC = () => {
	return (
		<S.FormFeed>
			<S.FormPub as={Row} className="mb-3 mt-5">
				<S.FotoPub src={fotoUsuario} alt="foto de perfil do usuário" />
				<S.TextoPub as="textarea" />
			</S.FormPub>

			<S.ContainerBotao as={Row} className="mb-4">
				<S.ButtonPub type="submit">
					publicar
				</S.ButtonPub>
			</S.ContainerBotao>
		</S.FormFeed>
	);
};

export default Publicar;
