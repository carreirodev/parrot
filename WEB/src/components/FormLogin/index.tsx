import React from "react";
import { Button, Form, FormControl, FormGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useFormik } from 'formik';
import * as Yup from 'yup';
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

			<Button className="mb-3" type="submit" id="botao-formulario">
				entrar
			</Button>

			<Link to="/cadastro" id="botao-inicial">cadastre-se</Link>
		</Form>
	);
};

export default FormLogin;
