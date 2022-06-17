import React from "react";
import foto from "../../assets/foto.png";
import * as S from "./styled";

const Posts: React.FC = () => {
	return (
		<div>
			<S.ContainerPost>
				<img src={foto} alt="foto de perfil" />
				<S.PostTexto>
					<S.NomeApe>
						<span>Vinicius </span>
						<span>-</span>
						<span> apê 42</span>
					</S.NomeApe>

					<S.Horario>10/06/2022 09:00</S.Horario>

					<S.Post>
						Poxa galera, vamos respeitar o horário de silêncio! Tinha alguém
						usando furadeira 2 HORAS DA MANHÃ!!! ó_ó
					</S.Post>
				</S.PostTexto>
			</S.ContainerPost>
			<hr />
		</div>
	);
};

export default Posts;
