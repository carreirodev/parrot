import React from "react";
import { Card } from "react-bootstrap";
import logo from "../../assets/logoForm.png";
import FormCadastro from "../../components/FormCadastro";

import "../../global/styles.css";
const Cadastro: React.FC = () => {
  return (
    <div className="fundo">
			<div className="layer">
				<Card className="text-center" id="box">
					<img src={logo} alt="logo do parrot" />
					<div className="form">
						<FormCadastro />
					</div>
				</Card>
			</div>
		</div>
  );
}

export default Cadastro;