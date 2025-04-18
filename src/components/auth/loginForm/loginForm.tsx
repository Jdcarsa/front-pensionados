import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginHeader from "./header/header";
import { Label } from "../../ui/label";
import { Input } from "../../ui/input";
import { Button } from "../../ui/button";

export default function LoginForm() { 
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        navigate("/home");
    };

    return (
        <div className="flex flex-col items-center gap-3 w-full md:w-1/2">
            <div className="w-full p-2">
                <LoginHeader />
            </div>
            <div className="flex flex-col justify-center items-center w-full h-full py-10 md:py-0">
                <div className="flex flex-col items-start w-1/2">
                    <h1 className="text-2xl md:text-3xl text-blue font-bold">
                        Inicio de sesión
                    </h1>
                </div>
                <form className="flex flex-col gap-3 w-1/2 py-10" onSubmit={handleSubmit}>
                    <div>
                        <Label htmlFor="email">Correo institucional</Label>
                        <Input
                            id="email"
                            type="email"
                            placeholder="Correo institucional"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="input-class"
                        />
                    </div>

                    <div>
                        <Label htmlFor="password">Contraseña</Label>
                        <Input
                            id="password"
                            type="password"
                            placeholder="Contraseña"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="input-class"
                        />
                    </div>
                    <Button type="submit" className="button-class rounded-lg">
                        Iniciar sesión
                    </Button>
                </form>
            </div>
        </div>
    );
}
