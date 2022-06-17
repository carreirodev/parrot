import React from "react";
import cover from "../../assets/cover.png";
import logo from "../../assets/logoForm.png";
import FormCadastro from "../../components/FormCadastro";
import * as S from "./styled";

const Cadastro: React.FC = () => {
	return (
		<S.Fundo>
			<img src={cover} alt="fundo do site" />
			<S.Layer>
				<S.Box className="text-center">
					<img src={logo} alt="logo do parrot" />
					<div className="form">
						<FormCadastro />
					</div>
				</S.Box>
			</S.Layer>
		</S.Fundo>
	);
};

export default Cadastro;
