import React from "react";
import { Button, Form, FormControl, FormGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { loginUser } from '../../api';
import * as S from "./styled";

const validationSchema = Yup.object({
	email: Yup.string()
		.email("Utilize um email válido")
		.required("Insira seu email"),
	password: Yup.string()
		.required("Insira sua senha")
		.min(8, "Sua senha deve ter no mínimo 8 caracteres")
		.max(12, "Sua senha deve ter no máximo 12 caracteres"),
})

const FormLogin: React.FC = () => {

	const formik = useFormik({
        initialValues: {
            email:'',
            password: ''
        },
        validationSchema,
        onSubmit: async values => {
			console.log(values);
			
			const a = await loginUser(values) 
			  console.log(values);
		  }
		})

	return (
		<S.StyledForm onSubmit={formik.handleSubmit}>
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
					id="password"
					type="password"
					placeholder="senha"
					value={formik.values.password}
					onChange={formik.handleChange}
					isInvalid={formik.touched.password && !!formik.errors.password}
					isValid={formik.touched.password && !formik.errors.password}
				/>
				{formik.errors.password && <span>{formik.errors.password}</span>}
			</FormGroup>

			<S.StyledButton className="mb-3" type="submit">
				entrar
			</S.StyledButton>

			<S.StyledLink to="/cadastro">cadastre-se</S.StyledLink>
		</S.StyledForm>
	);
};

export default FormLogin;