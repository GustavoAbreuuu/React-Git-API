import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  min-height: 100vh;
  padding: 0 2rem;
`;

export const Logo = styled.img`
  width: 13rem
`;

export const Title = styled.h1`
  font-size: 3rem;
  color: ${(props) => props.theme.colors.text};
`;

export const Form = styled.div` 
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 58.3rem;
`;

export const Input = styled.input`
  background: rgba(0, 0, 0, 0.8);
  width: 100%;
  height: 6.4rem;
  line-height: 6.4rem;
  border: none;
  font-size: 2rem;
  margin-right: 2.4rem;
  padding: 0 2.4rem;

  color: ${(props) => props.theme.colors.text};

  &::placeholder {
    color: ${(props) => props.theme.colors.metalDark};
  }
`;

export const Button = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  width: 8rem;
  height: 6.4rem;
  border: 0.3rem solid ${(props) => props.theme.colors.text};
  transition: background 0.3s;

  &:hover {
    background: ${(props) => props.theme.colors.container};
  }
`;

