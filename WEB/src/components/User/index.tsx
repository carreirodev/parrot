import React from "react";
import {
	Button,
	Col,
	Form,
} from "react-bootstrap";
import fotoUsuario from "../../assets/foto.png";
import "./styles.css";

const User: React.FC = () => {
	return (
		<div>
			<div className="container-user">
				<div className="user">
				<img src={fotoUsuario} alt="foto de perfil" />
					<div className="identificacao-user">
							<span className="nome">Nome Sobrenome </span>
							<span>apê 82</span>
						<span className="ape">user@mail.com</span>
					</div>
				</div>
				<Button type="submit" id="botao-user">
					Editar
				</Button>
			</div>
      	<hr/>
		</div>
	);
};

export default User;