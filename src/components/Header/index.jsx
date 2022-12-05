import React from 'react';
import logo from '../../assets/logo.png';
import { Button } from '../Button';
import {
    BuscarInputContainer,
    Container,
    Input,
    Menu,
    MenuRight,
    Row,
    Wrapper,
    UserPicture
} from './styles';
import { useNavigate } from 'react-router-dom';

const Header = ({autenticado}) => {
    const navigate = useNavigate();
    
    const handleClickHome = () =>{
        navigate('/');
    };
    const handleClickSignIn = () =>{
        navigate('/login');
    };

    const handleClickCadastro = () =>{
        navigate('/cadastro');
    };

    return (
        <Wrapper>
            <Container>
                <Row>
                    <img src={logo} alt="Logo da DIO" />
                    {autenticado ? (
                        <>
                            <BuscarInputContainer>
                                <Input placeholder='Buscar...' />
                            </BuscarInputContainer>
                            <Menu>Live Code</Menu>
                            <Menu>Global</Menu>
                        </>
                    ) : null}
                </Row>
                <Row>
                    {autenticado ? (
                        <UserPicture src="https://avatars.githubusercontent.com/u/18464876?s=96&v=4" />
                    ) : (
                        <>
                            <MenuRight onClick={handleClickHome}>Home</MenuRight>
                            <Button onClick={handleClickSignIn} title="Entrar" />
                            <Button onClick={handleClickCadastro} title="Cadastrar" />
                        </>
                    )}
                </Row>
            </Container>
        </Wrapper>

    );
};

export { Header };
