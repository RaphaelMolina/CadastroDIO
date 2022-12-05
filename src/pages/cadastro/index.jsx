import { MdEmail, MdLock, MdPermIdentity } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Column, Container, CriarText, EsqueciText, Row, SubTitleLogin, Title, TitleLogin, Wrapper} from './styles';
// import { api } from '../../services/api';

const schema = yup.object({
    email: yup.string().email('e-mail não é válido').required('Campo obrigatório'),
    password: yup.string().min(3, 'No mínimo 3 caracteres').required('Campo obrigatório'),
    nome: yup.string().min(3, 'No mínimo 3 caracteres').required('Campo obrigatório'),
}).required();

const Cadastro = () => {
    const navigate = useNavigate();

    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange',
    });

    // const onSubmit = async formData => {
    //     try {
    //         const { data } = await api.get(`users?email=${formData.email}&senha=${formData.password}`);
    //         if (data.length === 1) {
    //             navigate('/feed');
    //         } else {
    //             alert('Email ou senha inválido');
    //         }
    //     } catch {
    //         alert('Houve um erro, tente novamente.');
    //     }
    // }

    return (<>
        <Header />
        <Container>
            <Column>
                <Title>
                    A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.
                </Title>
            </Column>
            <Column>
                <Wrapper>
                    <TitleLogin>Comece agora grátis</TitleLogin>
                    <SubTitleLogin>Crie sua conta e make the change._</SubTitleLogin>
                    {/* <form onSubmit={handleSubmit(onSubmit)}> */}
                    <form>
                    <Input name="nome" errorMessage={errors?.nome?.message} control={control} placeholder="Nome completo" leftIcon={<MdPermIdentity />}/>
                        <Input name="email" errorMessage={errors?.email?.message} control={control} placeholder="E-mail" leftIcon={<MdEmail />}/>
                        <Input name="password" errorMessage={errors?.password?.message} control={control} placeholder="Senha" type="password" leftIcon={<MdLock />}/>
                        <Button title="Criar minha conta" variant="cadastro" type="submit" />
                    </form>
                    <Row>
                        <EsqueciText>Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.</EsqueciText>
                    </Row>
                    <Row>
                        <CriarText>Já tenho conta. <a href=''>Fazer Login</a></CriarText>
                    </Row>
                </Wrapper>
            </Column>
        </Container>
    </>)
}

export { Cadastro };