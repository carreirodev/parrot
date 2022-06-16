import React from "react";
import { Button, Form, FormControl, FormGroup } from "react-bootstrap";

import "../../global/styles.css";
const FormLogin: React.FC = () => {
	return (
		<Form id="formulario">
			<h3>LOGIN</h3>

			<FormGroup className="mb-3">
				<FormControl type="email" placeholder="email" />
			</FormGroup>
			<FormGroup className="mb-3">
				<FormControl type="password" placeholder="senha" />
			</FormGroup>

			<Button type="submit" id="botao-formulario">
				entrar
			</Button>
		</Form>
	);
};

export default FormLogin;
