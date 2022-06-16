import React from "react";
import { Button, Form, FormControl, FormGroup } from "react-bootstrap";

import "../../global/styles.css";
const FormCadastro: React.FC = () => {
	return (
		<Form id="formulario">
			<h3>CADASTRO</h3>
			<FormGroup className="mb-1">
				<FormControl type="text" placeholder="nome" />
			</FormGroup>
			<FormGroup className="mb-1">
				<FormControl type="email" placeholder="email" />
			</FormGroup>
			<FormGroup className="mb-1">
				<FormControl type="password" placeholder="senha" />
			</FormGroup>
			<FormGroup className="mb-1">
				<FormControl type="password" placeholder="confirmar senha" />
			</FormGroup>
			<FormGroup className="mb-1">
				<FormControl type="text" placeholder="unidade/apartamento" />
			</FormGroup>
			<FormGroup className="mb-1">
				<FormControl type="url" placeholder="link da foto" />
			</FormGroup>
			<Button type="submit" id="botao-formulario">
				entrar
			</Button>
		</Form>
	);
};

export default FormCadastro;
