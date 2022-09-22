import React from "react";
import styled from "styled-components";
import twitter from "../assets/twitter.svg";
import tumbler from "../assets/tumbler.svg";
import { ApiContext } from "../context/DataApi";
import { useContext } from "react";
const ButtonsContainer = styled.div`
  display: block;
  gap: 10px;
`;
const Icon = styled.a`
  display: flex;
  justify-content: center;
  background-color: ${(props) => props.color};
  padding: 10px;
  border-radius: 4px;
  width: 40px;
  float: left;
  margin-right: 4px;
`;
const Btn = styled.button`
  background-color: ${(props) => props.color};
  border: none;
  color: white;
  padding: 10px;
  border-radius: 4px;
  position: relative;
  float: right;
  font-size: 1.1rem;
  cursor: pointer;
`;
const IconImg = styled.img`
  width: 20px;
  filter: invert(100%);
`;
function Buttons() {
  const data = useContext(ApiContext);
  return (
    <ButtonsContainer >
      <Icon color={data.color}
        id="tweet-quote"
        target={"_top"}
        href={`https://twitter.com/intent/tweet?text="${encodeURIComponent(
          data.quote
        )}" ${encodeURIComponent(data.author)}&hashtags=quote`}
      >
        <IconImg src={twitter} alt="" />
      </Icon >
      <Icon color={data.color} href="">
        <IconImg src={tumbler} alt="" />
      </Icon>
      <Btn id="new-quote" color={data.color} onClick={data.nextQuote}>New quote</Btn>
    </ButtonsContainer>
  );
}

export default Buttons;
