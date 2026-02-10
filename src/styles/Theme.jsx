import PropTypes from "prop-types";
import React from "react";

import { ThemeProvider } from "styled-components";

export const theme = {
  colors: {
    white: '#FFFFFF',
    black: '#0C0D0F',
    red: '#E03131',
    orange: '#E8590C',
    yellow: '#FCC419',
    green: '#23DB42',
    teal: '#89DD13',
    cyan: '#3BC9DB',
    blue: '#25BEFF',
    indigo: '#4263Eb',
    purple: '#7E5CEF',
    pink: '#FE5895',
    metal: '#95a5a6',
    metalDark: '#7f8c8d',
    gray100: '#FAFAFA',
    gray200: '#E9ECEF',
    gray300: '#DEE2E6',
    gray400: '#CED4DA',
    gray500: '#A4ACB4',
    gray600: '#64666B',
    gray700: '#424449',
    gray800: '#1D1E21',
    gray900: '#141518',
    primary: '#F83600',
    secondary: '#FE8C00',
    danger: '#f37272',
    light: '#ecf0f1',
    dark: '#233240',
    champagneDark: '#bdc3c7',
    background: '#191919',
    container: '#2d2d2d',
    text: '#fff',
    link: '#3498db',
  },
  fontFamily: {
    heading: ["IBM Plex Sans", "sans-serif"].join(','),
    sans: ["Open Sans", "Arial", "Helvetica", "sans-serif"].join(','),
    mono: ["IBM Plex Mono", "serif"].join(','),
  },

    fontSizes: {
    normal: '1.6rem',
    small: '1.28rem',
    large: '1.92rem',
    title: '2.8rem',
    subtitle: '2rem',
  },

  breakpoints: {
    xs: '0',
    sm: '57.6rem',
    md: '76.8rem',
    lg: '99.2rem',
    xl: '120rem',
    xxl: '140rem',
  },
};

export function Theme({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

Theme.propTypes = {
  children: PropTypes.node.isRequired,
};
