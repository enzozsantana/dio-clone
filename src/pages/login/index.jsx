import { useNavigate  } from "react-router-dom";
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';

import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import axios from 'axios';

import { Container, Title, Column, TitleLogin, SubtitleLogin, EsqueciText, CriarText, Row, Wrapper} from './styles';
import { InputContainer, InputText, ErrorText  } from "../cadastro/styles";

const validationLogin = yup.object().shape({
    email: yup.string().email().required('E-mail é obrigatório'),
    password: yup.string().required('Senha é obrigatório').min(6, 'Mínimo de 6 caracteres')
})

const Login = () => {
    const navigate = useNavigate();

    const handleClickCadastrar = () => {
        navigate('/cadastro');
    }

    const { register, handleSubmit, formState: { errors  } } = useForm({
        resolver: yupResolver(validationLogin)
    });

    const userLogin = user => {
        axios.get(`http://localhost:8001/users?email=${user.email}&senha=${user.password}`)
            .then((response) => response.data)
            .then((responseData) => {
                if(responseData[0]) {
                    navigate('/feed') 
                    return
                } else {
                    alert('Usuário ou senha inválido')
                }
            })
            .catch((e) => {
                alert('Houve um erro, tente novamente');
            })
    };

    console.log('errors', errors);

    return (<>
        <Header />
        <Container>
            <Column>
                <Title>A plataforma para você aprender com experts, dominar as principais tecnologias
                 e entrar mais rápido nas empresas mais desejadas.</Title>
            </Column>
            <Column>
                <Wrapper>
                <TitleLogin>Faça seu cadastro</TitleLogin>
                <SubtitleLogin>Faça seu login e make the change._</SubtitleLogin>
                <form onSubmit={handleSubmit(userLogin)}>
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
                    <EsqueciText>Esqueci minha senha</EsqueciText>
                    <CriarText onClick={handleClickCadastrar}>Criar Conta</CriarText>
                </Row>
                </Wrapper>
            </Column>
        </Container>
    </>)
}

export { Login }