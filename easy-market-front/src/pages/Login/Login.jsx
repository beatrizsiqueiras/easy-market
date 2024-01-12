import styles from "./Login.module.css";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useAuthentication } from "../../hooks/useAuthentication";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";

const Login = () => {
    const [userLogin, setUserLogin] = useState("");
    const [password, setPassword] = useState("");

    const { loading, login } = useAuthentication();

    const handleSubmitLogin = async (e) => {
        e.preventDefault();
        const userData = {
            userLogin,
            password,
        };
        const logged = await login(userData);
    };

    // useEffect(() => {
    //     if (authError) {
    //         toast.error(authError, {
    //             position: "top-right",
    //             autoClose: 5000,
    //             hideProgressBar: false,
    //             closeOnClick: true,
    //             pauseOnHover: true,
    //             draggable: true,
    //             progress: undefined,
    //             theme: "light",
    //         });
    //     }
    // }, [authError]);

    return (
        <Container>
            <h1>Entrar</h1>
            <p>Faça o login para gerenciar suas vendas!</p>

            <Form onSubmit={handleSubmitLogin}>
                <Form.Group className='mb-3' controlId='formBasiclogin'>
                    <Form.Label>Login</Form.Label>
                    <Form.Control
                        type='login'
                        name='login'
                        placeholder='Informe o seu login'
                        value={userLogin}
                        onChange={(e) => {
                            setUserLogin(e.target.value);
                        }}
                        required
                    />
                </Form.Group>

                <Form.Group className='mb-3' controlId='formBasicPassword'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type='password'
                        name='password'
                        placeholder='Insira sua senha'
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                        required
                    />
                </Form.Group>
                <button className='btn'>Entrar</button>
            </Form>

            <ToastContainer
                position='top-right'
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme='light'
            />
            <ToastContainer />
        </Container>
    );
};

export default Login;
