import React, { useState } from "react";
import { Button, Form, FormControl, FormGroup, Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import logo from '../../assets/logoForm.png'
import "./styles.css";

const validationSchema = Yup.object({
	nome: Yup.string().required("Preencha esse campo com o seu nome!"),
	email: Yup.string()
		.email("Por favor, utilize um email válido!")
		.required("Por favor, insira seu email"),
	senha: Yup.string()
		.required("Por favor, preencha esse campo com sua senha")
		.min(8, "Sua senha deve ter no mínimo 8 caracteres")
		.max(12, "Sua senha deve ter no máximo 12 caracteres"),
	confirmarSenha: Yup.string()
		.oneOf([Yup.ref("senha"), null], "Preencha os campos com senhas iguais!")
		.required("Por favor, preencha esse campo com sua senha novamente"),
	apartamento: Yup.string().required(
		"Por favor, preencha esse campo com o número da sua unidade/apartamento"
	),
});

const FormCadastro: React.FC = () => {

	const formik = useFormik({
        initialValues: {
            nome:'',
            email:'',
            senha: '',
			confirmarSenha: '',
			apartamento: '',
        },
        validationSchema,
        onSubmit: async values => {
			// FALTA COMPLETAR
		  }
		})
	
	return(
		<Form id="formulario" 
		>
				<img src={logo} alt="logo do parrot" />

			<h3>CADASTRO</h3>

			<FormGroup className="mb-1">
				<FormControl
					id="nome"
					type="text"
					placeholder="nome"
					value={formik.values.nome}
					onChange={formik.handleChange}
					isInvalid={formik.touched.nome && !!formik.errors.nome}
					isValid={formik.touched.nome && !formik.errors.nome}
				/>
				{formik.errors.nome && <span>{formik.errors.nome}</span>}
			</FormGroup>
			<FormGroup className="mb-1">
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
			<FormGroup className="mb-1">
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
			<FormGroup className="mb-1">
				<FormControl
					id="confirmarSenha"
					type="password"
					placeholder="confirmar senha"
					value={formik.values.confirmarSenha}
					onChange={formik.handleChange}
					isInvalid={
						formik.touched.confirmarSenha && !!formik.errors.confirmarSenha
					}
					isValid={
						formik.touched.confirmarSenha && !formik.errors.confirmarSenha
					}
				/>
				{formik.errors.confirmarSenha && <span>{formik.errors.confirmarSenha}</span>}
			</FormGroup>
			<FormGroup className="mb-1">
				<FormControl
					id="apartamento"
					type="text"
					placeholder="unidade/apartamento"
					value={formik.values.apartamento}
					onChange={formik.handleChange}
					isInvalid={formik.touched.apartamento && !!formik.errors.apartamento}
					isValid={formik.touched.apartamento && !formik.errors.apartamento}
				/>
				{formik.errors.apartamento && <span>{formik.errors.apartamento}</span>}
			</FormGroup>

			<Button className="mb-3" type="submit" id="botao-formulario">
				entrar
			</Button>

			{formik.errors.email && formik.touched.email && (
				<Alert style={{ marginTop: 15 }} variant="danger">
					{formik.errors.email}
					{formik.errors.senha && formik.touched.senha && (
						<Alert style={{ marginTop: 15 }} variant="danger">
							{formik.errors.senha}
						</Alert>
					)}
					{formik.errors.confirmarSenha && formik.touched.confirmarSenha && (
						<Alert style={{ marginTop: 15 }} variant="danger">
							{formik.errors.confirmarSenha}
						</Alert>
					)}
				</Alert>
			)}

			<Link to="/" id="botao-inicial">
				voltar
			</Link>
		</Form>
	);
};

export default FormCadastro
