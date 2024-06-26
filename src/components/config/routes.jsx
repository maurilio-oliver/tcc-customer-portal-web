import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "../container/home-page.jsx";
import ProductComponent from "../container/product-component.jsx";
import SingonComponent from "../container/singon-component.jsx";
import ProductManagerComponent from "../container/product-manager.jsx";
import LoginComponent from "../container/login-component.jsx";


var RoutesPath = () => {
    return (<BrowserRouter>
        <Routes>
            <Route path={"/home"} element={ <HomePage/> }/>
            <Route path={"/home/login"} element={ <LoginComponent/> }/>
            <Route path={"/*"} element={ <HomePage/> }/>
            <Route path={"/home/cadastro"} element={<SingonComponent/>}/>
            <Route path={"/home/entrar"}/>
            <Route path={"/home/:category"}/>
            <Route path={"/produto/:id"} element={<ProductComponent/>}/>
            <Route path={"/vendedor/produto/criar"} element={<ProductManagerComponent/>}/>
            <Route path={"/vendedor/produto/:productId"}/>
            <Route path={"/vendendor/perfil/settings"}/>
            <Route path={"/cliente/perfil/settings"}/>
        </Routes>
    </BrowserRouter>)
}

export default RoutesPath