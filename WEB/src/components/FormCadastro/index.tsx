import React, { useState } from "react";
import { Button, Form, FormControl, FormGroup, Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { createUser2 } from '../../api';
import logo from '../../assets/logoForm.png'
import "./styles.css";

const validationSchema = Yup.object({
	name: Yup.string().required("Preencha esse campo com o seu name!"),
	email: Yup.string()
		.email("Por favor, utilize um email válido!")
		.required("Por favor, insira seu email"),
	password: Yup.string()
		.required("Por favor, preencha esse campo com sua password")
		.min(8, "Sua password deve ter no mínimo 8 caracteres")
		.max(12, "Sua password deve ter no máximo 12 caracteres"),
	confirmarpassword: Yup.string()
		.oneOf([Yup.ref("password"), null], "Preencha os campos com passwords iguais!")
		.required("Por favor, preencha esse campo com sua password novamente"),
	apartment: Yup.string().required(
		"Por favor, preencha esse campo com o número da sua unidade/apartment"
	),
});

const FormCadastro: React.FC = () => {

	const formik = useFormik({
        initialValues: {
            name:'',
            email:'',
            password: '',
			confirmarpassword: '',
			apartment: '',
        },
        validationSchema,
        onSubmit: async values => {
			const a = await createUser2({
				name: values.name,
				password: values.password,
				email: values.email,
				apartment: parseInt(values.apartment),
			  }) 
			  console.log(a); 
			  
		  }
		})
	
	return(
		<Form onSubmit={formik.handleSubmit} id="formulario" 
		>
				<img src={logo} alt="logo do parrot" />

			<h3>CADASTRO</h3>

			<FormGroup className="mb-1">
				<FormControl
					id="name"
					type="text"
					placeholder="name"
					value={formik.values.name}
					onChange={formik.handleChange}
					isInvalid={formik.touched.name && !!formik.errors.name}
					isValid={formik.touched.name && !formik.errors.name}
				/>
				{formik.errors.name && <span>{formik.errors.name}</span>}
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
					id="password"
					type="password"
					placeholder="password"
					value={formik.values.password}
					onChange={formik.handleChange}
					isInvalid={formik.touched.password && !!formik.errors.password}
					isValid={formik.touched.password && !formik.errors.password}
				/>
				{formik.errors.password && <span>{formik.errors.password}</span>}
			</FormGroup>
			<FormGroup className="mb-1">
				<FormControl
					id="confirmarpassword"
					type="password"
					placeholder="confirmar password"
					value={formik.values.confirmarpassword}
					onChange={formik.handleChange}
					isInvalid={
						formik.touched.confirmarpassword && !!formik.errors.confirmarpassword
					}
					isValid={
						formik.touched.confirmarpassword && !formik.errors.confirmarpassword
					}
				/>
				{formik.errors.confirmarpassword && <span>{formik.errors.confirmarpassword}</span>}
			</FormGroup>
			<FormGroup className="mb-1">
				<FormControl
					id="apartment"
					type="text"
					placeholder="unidade/apartment"
					value={formik.values.apartment}
					onChange={formik.handleChange}
					isInvalid={formik.touched.apartment && !!formik.errors.apartment}
					isValid={formik.touched.apartment && !formik.errors.apartment}
				/>
				{formik.errors.apartment && <span>{formik.errors.apartment}</span>}
			</FormGroup>

			<Button className="mb-3" type="submit" id="botao-formulario">
				entrar
			</Button>

			{formik.errors.email && formik.touched.email && (
				<Alert style={{ marginTop: 15 }} variant="danger">
					{formik.errors.email}
					{formik.errors.password && formik.touched.password && (
						<Alert style={{ marginTop: 15 }} variant="danger">
							{formik.errors.password}
						</Alert>
					)}
					{formik.errors.confirmarpassword && formik.touched.confirmarpassword && (
						<Alert style={{ marginTop: 15 }} variant="danger">
							{formik.errors.confirmarpassword}
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

export default FormCadastro;