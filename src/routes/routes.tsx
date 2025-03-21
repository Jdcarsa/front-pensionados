import { Routes, Route } from "react-router-dom";
import Login from "../components/auth/loginForm/login";
import Home from "../pages/home/home";
import MainLayout from "../mainLayout"; 

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route
                path="/*"
                element={
                    <MainLayout>
                        <Routes>
                            <Route path="/home" element={<Home />} />
                            {/* Agregar rutas*/}
                        </Routes>
                    </MainLayout>
                }
            />
        </Routes>
    );
}