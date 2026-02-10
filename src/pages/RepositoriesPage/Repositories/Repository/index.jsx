import React from 'react';
import { Container, Name, Description, Footer, Lang, Link } from './styles';

export default function Repository() {
    return (
        <Container color="#FCC419">
            <Name>Repository Name</Name>
            <Description>Repository Description</Description>
            <Footer color="#FCC419">
                <Lang>Repository Lang</Lang>
                <Link href="https://github.com/" target="_blank">
                    Ver
                </Link>
            </Footer>
        </Container>
    );
}