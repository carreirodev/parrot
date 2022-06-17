import { useState } from "react";
import { Card } from "react-bootstrap";
import logo from "../../assets/logoForm.png";
import FormCadastro from "../../components/FormCadastro";

import "./styles.css";
const Cadastro: React.FC = () => {
	const [name, setName] = useState<string>("");
	const [email, setEmail] = useState<string>("");
	const [apartment, setApartment] = useState<number>();
	const [password, setPassword] = useState<string>("");

	const cadastro = async (event) => {
		event.preventDefault();
	}

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
};

export default Cadastro;
