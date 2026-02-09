import React from 'react';
import { MdGroup, MdLocationCity, MdWork, MdLink } from 'react-icons/md';
import { Container, Header, Avatar, Login, Name, Inner, Data } from './styles';

export default function Profile() {
    return (
        <Container>
            <Header>
                <Avatar src="https://avatars.githubusercontent.com/u/147453905?v=4"/>
                <Login>gustavoabreu</Login>
                <Name>Gustavo Abreu</Name>
            </Header>
            <Inner>
                <Data>
                    <MdGroup size={20} />
                    30&nbsp;<i>seguidores</i>&nbsp;&middot;&nbsp;10&nbsp;<i>seguindo</i>
                </Data>
                <Data>
                    <MdWork size={20} /> Dev
                </Data>
                <Data>
                    <MdLocationCity size={20} /> Florianópolis
                </Data>
                <Data>
                    <MdLink size={20} />&nbsp; 
                    <a href="https://github.com/GustavoAbreuuu">github.com/GustavoAbreuuu</a>
                </Data>
            </Inner>
        </Container>
    );
}