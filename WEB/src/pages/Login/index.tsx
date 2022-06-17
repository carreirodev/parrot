import React from "react";
import { Card } from "react-bootstrap";
import logo from "../../assets/logoForm.png";
import FormLogin from "../../components/FormLogin";

import "./styles.css";
const Login: React.FC = () => {
	return (
		<div className="fundo">
			<div className="layer">
				<Card className="text-center" id="box">
					<img src={logo} alt="logo do parrot" />
					<div className="form">
						<FormLogin />
					</div>
				</Card>
			</div>
		</div>
	);
};

export default Login;
