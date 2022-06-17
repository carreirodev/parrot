import React from "react";
import { Button, Form, FormControl, FormGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import "../../global/styles.css";

const validationSchema = Yup.object({
	email: Yup.string()
		.email("Por favor, utilize um email válido!")
		.required("Por favor, insira seu email"),
	senha: Yup.string()
		.required("Por favor, preencha esse campo com sua senha")
		.min(8, "Sua senha deve ter no mínimo 8 caracteres")
		.max(12, "Sua senha deve ter no máximo 12 caracteres"),
})

const FormLogin: React.FC = () => {

	const formik = useFormik({
        initialValues: {
            email:'',
            senha: ''
        },
        validationSchema,
        onSubmit: async values => {
			// FALTA COMPLETAR
		  }
		})

	return (
		<Form id="formulario">
			<h3>LOGIN</h3>

			<FormGroup className="mb-3">
			<FormControl
					id="email"
					type="email"
					placeholder="email"
					value={formik.values.email}
					onChange={formik.handleChange}
					isInvalid={formik.touched.email && !!formik.errors.email}
					isValid={formik.touched.email && !formik.errors.email}
				/>
				{formik.errors.email && <span>{formik.errors.email}</span>}
			</FormGroup>
			<FormGroup className="mb-3">
			<FormControl
					id="senha"
					type="password"
					placeholder="senha"
					value={formik.values.senha}
					onChange={formik.handleChange}
					isInvalid={formik.touched.senha && !!formik.errors.senha}
					isValid={formik.touched.senha && !formik.errors.senha}
				/>
				{formik.errors.senha && <span>{formik.errors.senha}</span>}
			</FormGroup>

			<Button className="mb-3" type="submit" id="botao-formulario">
				entrar
			</Button>

			<Link to="/cadastro" id="botao-inicial">cadastre-se</Link>
		</Form>
	);
};

export default FormLogin;