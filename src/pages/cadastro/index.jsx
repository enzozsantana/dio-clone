import { useNavigate  } from "react-router-dom";
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';

import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import axios from "axios";

import { Container, Title, Column, TitleLogin, SubtitleLogin, LoginText, TenhoText, Row, Wrapper, InputContainer, InputText, ErrorText } from './styles';

const validationCadastro = yup.object().shape({
    name: yup.string().required('Nome é obrigatório'),
    email: yup.string().email().required('E-mail é obrigatório'),
    password: yup.string().required('Senha é obrigatório').min(6, 'Mínimo de 6 caracteres')
})

const Cadastro = () => {

    const navigate = useNavigate();

    const handleClickEntrar= () => {
        navigate('/login');
    }

    const { register, handleSubmit, formState: { errors  } } = useForm({
        resolver: yupResolver(validationCadastro)
    });

    const addNewUser = user => axios.post("http://localhost:8001/users", user)
    .then(() => {
        navigate('/feed')
    })
    .catch((e) => {
        alert('Houve um erro, tente novamente');
    })

    return (
    <>
        <Header />
        <Container>
            <Column>
                <Title>A plataforma para você aprender com experts, dominar as principais tecnologias
                 e entrar mais rápido nas empresas mais desejadas.</Title>
            </Column>
            <Column>
                <Wrapper>
                    <TitleLogin>Comece agora grátis</TitleLogin>
                    <SubtitleLogin>Faça seu login e make the change._</SubtitleLogin>
                    <form onSubmit={handleSubmit(addNewUser)}>
                        <InputContainer>
                            <InputText type="text" name="name" {...register("name")} placeholder="Nome completo" />
                        </InputContainer>
                        <ErrorText>{errors.name?.message}</ErrorText>
                        <InputContainer>
                            <InputText type="email" name="email" {...register("email")} placeholder="E-mail" />
                        </InputContainer>
                        <ErrorText>{errors.email?.message}</ErrorText>
                        <InputContainer>
                            <InputText type="password" name="password" {...register("password")} placeholder="Password" />
                        </InputContainer>
                        <ErrorText>{errors.password?.message}</ErrorText>
                        <Button title="Entrar" variant="secondary" type="submit"/>
                    </form>
                    <Row>
                        <SubtitleLogin>Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.</SubtitleLogin>
                    </Row>
                    <Row>
                        <TenhoText>Já tenho conta.</TenhoText>
                        <LoginText onClick={handleClickEntrar}>Fazer login</LoginText>
                    </Row>
                </Wrapper>
            </Column>
        </Container>
    </>)
}

export { Cadastro };