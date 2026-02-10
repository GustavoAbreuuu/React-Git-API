import React from 'react';
import Profile from './Profile';
import Filter from './Filter';
import Repositories from './Repositories';
import { Container, Sidebar, Main } from './styles';

export default function RepositoriesPage() {
    const user = {
        login: "gustavoabreuuu",
        name: "Gustavo",
        avatar_url: "https://avatars.githubusercontent.com/u/147453905?v=4",
        followers: 4,
        following: 4,
        company: null,
        blog: "https://github.com/GustavoAbreuuu",
        location: "Florianópolis. Brasil",
    };

    return (
        <Container>
            <Sidebar>
               <Profile user={user} /> 
               <Filter />
            </Sidebar>
            <Main>
                <Repositories />
            </Main>
        </Container>
    );
}