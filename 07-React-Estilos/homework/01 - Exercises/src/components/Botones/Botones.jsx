import React from 'react';
import styled from "styled-components";

//const DivButtons = 'DivButtons'
const DivButtons = styled.div`
     display: flex;
     flex-direction: row;
     justify-content: space-around;
     align-items: center;
`;
const Buttons = styled.div`
    border-radius: 5px;
    background-color: black;
    margin: 10px;
    padding: 5px;
    color:  beige;
`;

export default class Botones extends React.Component {
  render () {
    const { alerts } = this.props
    return (
      <DivButtons>
        <Buttons onClick={() => window.alert(alerts.m1)}>Módulo 1</Buttons>
        <Buttons onClick={() => window.alert(alerts.m2)}>Módulo 2</Buttons>
      </DivButtons>
    )
  }
}

// Esto lo exportamos para los tests
export { DivButtons, Buttons }
