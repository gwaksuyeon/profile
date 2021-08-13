import React from 'react';
import styled, { keyframes } from 'styled-components';

const BackGround: React.FC = () => {
  return (
    <Container>
      {new Array(10).fill(0).map((obj: any, inx: number) => (
        <Square key={`square-${inx}`} />
      ))}
    </Container>
  );
};

const Animation = keyframes`
    0 {
        transform: translateY(0) rotate(0deg);
        opacity: 1;
        border-radius: 0;
    }

    100% {
        transform: translateY(-1000px) rotate(720deg);
        opacity: 0;
        border-radius: 50%;
    }
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0%;
  z-index: 1;
  overflow: hidden;
`;

const Square = styled.div`
  position: absolute;
  width: 20px;
  height: 20px;
  background: rgba(255, 255, 255, 0.5);
  animation: ${Animation} 25s linear infinite;
  bottom: -150px;

  &:nth-of-type(1) {
    left: 25%;
    width: 80px;
    height: 80px;
    animation-delay: 0s;
    background: rgba(253, 219, 58, 0.4);
  }

  &:nth-of-type(2) {
    left: 10%;
    width: 20px;
    height: 20px;
    animation-delay: 2s;
    animation-duration: 12s;
    background: rgba(253, 219, 58, 0.4);
  }

  &:nth-of-type(3) {
    left: 70%;
    width: 20px;
    height: 20px;
    animation-delay: 4s;
    background: rgba(253, 219, 58, 0.4);
  }

  &:nth-of-type(4) {
    left: 40%;
    width: 60px;
    height: 60px;
    animation-delay: 0s;
    animation-duration: 18s;
    background: rgba(253, 219, 58, 0.4);
  }

  &:nth-of-type(5) {
    left: 65%;
    width: 20px;
    height: 20px;
    animation-delay: 0s;
    background: rgba(253, 219, 58, 0.4);
  }

  &:nth-of-type(6) {
    left: 75%;
    width: 110px;
    height: 110px;
    animation-delay: 3s;
  }

  &:nth-of-type(7) {
    left: 35%;
    width: 150px;
    height: 150px;
    animation-delay: 7s;
    background: rgba(253, 219, 58, 0.4);
  }

  &:nth-of-type(8) {
    left: 50%;
    width: 25px;
    height: 25px;
    animation-delay: 15s;
    animation-duration: 45s;
    background: rgba(253, 219, 58, 0.4);
  }

  &:nth-of-type(9) {
    left: 20%;
    width: 15px;
    height: 15px;
    animation-delay: 2s;
    animation-duration: 35s;
    background: rgba(253, 219, 58, 0.4);
  }

  &:nth-of-type(10) {
    left: 85%;
    width: 150px;
    height: 150px;
    animation-delay: 0s;
    animation-duration: 11s;
  }
`;

export default BackGround;
