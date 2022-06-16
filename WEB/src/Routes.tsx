import {
	Routes as WrapperRoutes,
	Route,
	BrowserRouter,
} from "react-router-dom";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import Feed from "./pages/Feed";
import PerfilUsuario from "./pages/PerfilUsuario";

export default function Routes() {
	return (
		<BrowserRouter>
			<WrapperRoutes>
				<Route path="/" element={<Login />} />
				<Route path="/cadastro" element={<Cadastro />} />
				<Route path="/post" element={<Feed />} />
				<Route path="/perfil" element={<PerfilUsuario />} />
			</WrapperRoutes>
		</BrowserRouter>
	);
}
