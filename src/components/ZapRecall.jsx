import { useState } from 'react';
import Topo from './Topo';
import Perguntas from './Perguntas';
import Contador from './Contador';
import styled, { createGlobalStyle } from 'styled-components';
import "@fontsource/recursive"
import cards from '../perguntas'; 


function ZapRecall() {
  const [terminada, setTerminadas] = useState([]);
  return (
    <>
      <GlobalStyle />
      <Container>
        <LogoTopo><Topo/></LogoTopo>
        <StylePerguntas > <Perguntas cards={cards} terminada={terminada} setTerminadas={setTerminadas}/> </StylePerguntas >
        <BarraContador><Contador cards={cards} terminada={terminada}/></BarraContador>
      </Container>
    
    </>
  );
}

export default ZapRecall;

const Container = styled.div`
  background-color:#FB6B6B ;
  max-width:700px;
  height:100%;
  margin: auto;
  display:flex;
  align-items:center;
  flex-direction:column;
  min-height:100vh;
  position:relative;
`;

const GlobalStyle = createGlobalStyle`
  body {
    background-color:#E5E5E5;
    overflow-y:hidden;
  }
`;

const BarraContador = styled.div`
  width:100%;
  height:70px;
  margin:auto;
  margin-top:42px;
  background-color:#FFFFFF;
  position:absolute;
  z-index:2;
  bottom:0;
  text-align: center;
  display:flex;
  justify-content:center;
  align-items:center;
  font-family: 'Recursive', sans-serif;
  font-size: 18px;
  font-weight: 400;
  line-height: 21.6px; 
  color:#333333;

`

const LogoTopo = styled.div`
  width:255.61px;
  height:60px;
  margin-top:42px;

`;
const StylePerguntas = styled.div`
  width:100%;
  max-height:475px;
  margin-top:21px;
  margin-bottom: 74px;
  display:flex;
  align-items:center;
  flex-direction:column;
  overflow-y:auto;
 
`;