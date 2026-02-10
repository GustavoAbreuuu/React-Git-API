import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
    grid-template-columns: auto;
    gap: 0.5rem;
    margin: 1.6rem auto;
    padding-right: 2rem;
    font-size: 1.3rem;

    @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
        grid-template-columns: auto auto;
        gap: 0.8rem;
        padding: 0 1rem;
    }
`;

export const Selector = styled.button`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: ${(props) => props.color || props.theme.colors.container};
    color: ${(props) => props.color ? props.theme.colors.white : props.theme.colors.text}   ;
    width: 100%;
    min-height: 3.2rem;
    border: none;
    border-top-left-radius: 2rem;
    border-bottom-right-radius: 2rem;
    transition: background 0.3s, transform 0.3s;
    padding: 0 1.6rem;

    &:hover,
    &.selected { 
        background: ${(props) => props.color || props.theme.colors.light};
        color: ${(props) => props.color ? props.theme.colors.white : props.theme.colors.black};
        filter: brightness(1.1);
    }

    @media screen and (max-width: ${(props) => props.theme.breakpoints.md }) {
        border-radius: 2rem;
        &:hover,
        &.selected {
            transform: translateX(0) scale(1.02);
        }
    }
`;

export const Cleaner = styled.button`
    background: transparent;
    color: ${(props) => props.theme.colors.text};
    border: none;
    text-align: center;
    padding: 1.6rem;
    font-size: 1.4rem;
    margin-top: 1rem;
    &:hover {
        color: rgba(255, 255, 255, 0.5)
    }

    @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
        text-align: center;
        padding: 0 1.6rem;
    }
`;
