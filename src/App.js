import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Container from './components/Container';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Poppins', sans-serif;
    display:flex;
    width:100vw;
    height:100vh;
    justify-content:center;
    align-items:center;
    margin:0;
    overflow:hidden;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Container/>
    </>
  );
}

export default App;
