import styled from 'styled-components';

export const Container = styled.ul`
    list-style: none;
    margin-top: 2rem;
    padding: 1rem;
    width: 100%;
`;

export const Data = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 0.8rem;
  font-size: 1.4rem;
  color: ${(props) => props.theme.colors.white};

  svg {
    fill: ${(props) => props.theme.colors.white};
    width: 2rem;  
    height: 2rem;
    margin-right: 1rem; 
  }

  a {
    color: ${(props) => props.theme.colors.white};
    text-decoration: none;
    
    &:hover {
      color: ${(props) => props.theme.colors.primary};
    }
  }
`;

export const Header = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 1.3rem;

    @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
        flex-direction: row;
        align-items: center;
    }
`;

export const Avatar = styled.img`
    align-self: center;
    border-radius: 50%;
    width: 60%;
    margin-bottom: 1.6rem;

    @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
        width: 7rem;
        height: 7rem;
        margin-right: 1.6rem;
        margin-bottom: 0;
    }
`;

export const Login = styled.h1`
    font-size: ${(props) => props.theme.fontSizes.title};
    color: ${(props) => props.theme.colors.white};
    margin-bottom: 1.5rem;  
`;

export const Name = styled.h2`
    font-size: ${(props) => props.theme.fontSizes.subtitle};
    font-weight: normal;
    color: ${(props) => props.theme.colors.gray400};
    margin-top: 0;
    margin-bottom: 2.1rem;

    @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
        display: none;
    }
`;

export const Inner = styled.div`
    padding: 1.6rem;

    @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
        display: none;
    }
`;
