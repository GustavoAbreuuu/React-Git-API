import React from 'react';
import Profile from './Profile';
import Filter from './Filter';
import Repositories from './Repositories';
import { Container, Sidebar, Main } from './styles';
import { getLangsFrom } from '../../services/api';
 
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

    const repositories = [
        { id: 1, name: 'Repo 1', description: 'Descrição', html_url: 'https://github.com/GustavoAbreuuu', language: 'Javascript',
        },
        { id: 2, name: 'Repo 2', description: 'Descrição', html_url: 'https://github.com/GustavoAbreuuu', language: 'Javascript',
        },
        {  id: 3, name: 'Repo 3', description: 'Descrição', html_url: 'https://github.com/GustavoAbreuuu', language: 'PHP',
        },
        { id: 4, name: 'Repo 4', description: 'Descrição', html_url: 'https://github.com/GustavoAbreuuu', language: null,
        },
        { id: 5, name: 'Repo 5', description: 'Descrição', html_url: 'https://github.com/GustavoAbreuuu', language: 'Typescript',
        },
        { id: 6, name: 'Repo 6', description: 'Descrição', html_url: 'https://github.com/GustavoAbreuuu', language: 'Ruby',
        },
    ];

    const languages = getLangsFrom(repositories);

    return (
        <Container>
            <Sidebar>
               <Profile user={user} /> 
               <Filter languages={languages} />
            </Sidebar>
            <Main>
                <Repositories repositories={repositories} />
            </Main>
        </Container>
    );
}