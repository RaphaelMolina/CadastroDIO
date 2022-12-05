import { Header } from "../../components/Header";
import { Container, Column, Title, TitleHighLight} from './styles';
import { Card } from '../../components/Card';
import { UserInfo } from '../../components/UserInfo';

const Feed = () => {
    return (<>
        <Header autenticado={true}/>
        <Container>
            <Column flex={3}>
                <Title>Feed</Title>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </Column>
            <Column flex={1}>
                <TitleHighLight># Ranking 5 Top da Semana</TitleHighLight>
                <UserInfo percentual={80} name="Raphael Molina" image="https://avatars.githubusercontent.com/u/18464876?s=96&v=4" />   
                <UserInfo percentual={70} name="Raphael Molina" image="https://avatars.githubusercontent.com/u/18464876?s=96&v=4" />
                <UserInfo percentual={60} name="Raphael Molina" image="https://avatars.githubusercontent.com/u/18464876?s=96&v=4" />
                <UserInfo percentual={50} name="Raphael Molina" image="https://avatars.githubusercontent.com/u/18464876?s=96&v=4" />
                <UserInfo percentual={40} name="Raphael Molina" image="https://avatars.githubusercontent.com/u/18464876?s=96&v=4" />
            </Column>
        </Container>
    </>);
}

export { Feed };