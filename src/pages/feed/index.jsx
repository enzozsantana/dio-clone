import React from 'react';
import { Header } from '../../components/Header';
import { Card } from '../../components/Card';
import { UserInfo } from '../../components/UserInfo';

import { Container, Column, Title, TitleHighlight } from './styles';

const Feed = () => {
    return (
        <div>
            <Header autenticado={true} />
            <Container>
                <Column flex={3}>
                    <Title>FEED</Title>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </Column>
                <Column flex={1}>
                    <TitleHighlight>#RANKING DA SEMANA</TitleHighlight>
                    <UserInfo percentual={80} name="Enzo Sant'Ana" image="https://avatars.githubusercontent.com/u/89364741?s=400?u=688fd4d97defafd82f47a69060cd63d5c6e2b1af?v=4" />
                    <UserInfo percentual={27} name="Enzo Sant'Ana" image="https://avatars.githubusercontent.com/u/89364741?s=400?u=688fd4d97defafd82f47a69060cd63d5c6e2b1af?v=4" />
                    <UserInfo percentual={89} name="Enzo Sant'Ana" image="https://avatars.githubusercontent.com/u/89364741?s=400?u=688fd4d97defafd82f47a69060cd63d5c6e2b1af?v=4" />
                    <UserInfo percentual={57} name="Enzo Sant'Ana" image="https://avatars.githubusercontent.com/u/89364741?s=400?u=688fd4d97defafd82f47a69060cd63d5c6e2b1af?v=4" />
                    <UserInfo percentual={12} name="Enzo Sant'Ana" image="https://avatars.githubusercontent.com/u/89364741?s=400?u=688fd4d97defafd82f47a69060cd63d5c6e2b1af?v=4" />
                </Column>
                
            </Container>
        </div>
    )
}

export { Feed };