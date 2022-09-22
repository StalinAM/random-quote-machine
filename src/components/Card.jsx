import React from "react";
import styled from "styled-components";
import Buttons from "./Buttons";
import { ApiContext } from "../context/DataApi";
import { useContext } from "react";
const Container = styled.div`
  background-color: white;
  max-width: 80%;
  display: flex;
  flex-direction: column;
  padding: 3em;
  border-radius: 6px;
`;
const Quote = styled.p`
  color: ${(props) => props.color};
  text-align: center;
  font-size: 2rem;
  padding: 0 1em;
  margin-bottom: 1em;
  font-weight: bold;
`;
const ContainerAuthor = styled.div`
  color: ${(props) => props.color};
  margin-bottom: 2em;
`;
const Author = styled.span`
  float: right;
  text-align: end;
  font-weight: 200;
  font-size: 1.4rem;
`;

function Card() {
  const data = useContext(ApiContext);

  return (
    <Container id="quote-box">
      <Quote id="text" color={data.color}>"{data.quote}"</Quote>
      <ContainerAuthor color={data.color}>
        <Author>- {data.author}</Author>
      </ContainerAuthor>
      <Buttons />
    </Container>
  );
}

export default Card;
