import React from "react";
import {} from "react-bootstrap";
import foto from "../../assets/foto.png";
import "./styles.css";

const Posts: React.FC = () => {
	return (
		<div>
			<div className="container-post">
				<img src={foto} alt="foto de perfil" />
				<div className="post-texto">
					<div className="nome-ape">
						<span className="nome">Vinicius </span>
						<span>-</span>
						<span className="ape"> apê 42</span>
					</div>

					<span className="horario">10/06/2022 09:00</span>

					<p className="post">
						Poxa galera, vamos respeitar o horário de silêncio! Tinha alguém
						usando furadeira 2 HORAS DA MANHÃ!!! ó_ó
					</p>
				</div>
			</div>
      <hr/>
		</div>
	);
};

export default Posts;
