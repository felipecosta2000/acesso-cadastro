import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from '../views/Login';
import Cadastro from '../views/Cadastro';
import Home from '../views/Home';

const AppRoutes = () => {

    return(

        <Router>
            <Routes>
            <Route path='/'         element={<Cadastro />} />
                <Route path='/login'    element={<Login />} />
                <Route path='/cadastro' element={<Cadastro />} />
                <Route path='/home'     element={<Home />} />
            </Routes>
        </Router>

    )


}

export default AppRoutes;