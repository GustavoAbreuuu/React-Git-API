import React from 'react';

import { Container, Header, Avatar, Login, Name } from './styles';

export default function Profile() {
    return (
        <Container>
            <Header>
                <Avatar src="https://avatars.githubusercontent.com/u/147453905?v=4"/>
                <Login>usuario</Login>
                <Name>Gustavo Abreu</Name>
            </Header>
        </Container>
    );
}