import { useContext, useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../../context/AuthContext';

const Login = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const { signIn, error } = useContext(AuthContext);

    const handleSubmitLogin = async (e) => {
        e.preventDefault();
        const userData = {
            login,
            password,
        };
        await signIn(userData);
        navigate('/');
    };

    useEffect(() => {
        if (error) {
            toast.error(error, {
                position: 'top-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'light',
            });
        }
    }, [error]);

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
                        value={login}
                        onChange={(e) => {
                            setLogin(e.target.value);
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
