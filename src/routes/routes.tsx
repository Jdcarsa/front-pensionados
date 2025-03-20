import { Routes, Route } from 'react-router-dom';
import Login from '../components/auth/loginForm/login';
import Home from '../pages/home/home';


export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Login/>} />
            <Route path="/home" element={<Home />} />
        </Routes>
    );
};


