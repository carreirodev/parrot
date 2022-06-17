import React from "react";
import { Button } from "react-bootstrap";
import fotoUsuario from "../../assets/foto.png";
import * as S from "./styled";

const User: React.FC = () => {
	return (
		<div>
			<S.ContainerUser>
				<S.User>
					<img src={fotoUsuario} alt="foto de perfil" />
					<S.InfoUser>
						<S.Nome>Nome Sobrenome </S.Nome>
						<span>apê 82</span>
						<span className="ape">user@mail.com</span>
					</S.InfoUser>
				</S.User>
				<S.BotaoUser type="submit">
					Editar
				</S.BotaoUser>
			</S.ContainerUser>
			<hr />
		</div>
	);
};

export default User;
