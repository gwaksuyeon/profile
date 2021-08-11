import React from 'react';
import styled, { keyframes } from 'styled-components';

const Container1: React.FC = () => {
  return (
    <Container>
      <Circle />

      <Contents>
        <TextLayout>
          <NameDescription>Lorem ipsum dolor sit.</NameDescription>
          <Title>
            Lorem ipsum dolor sit amet{'\n'}consectetur adipisicing elit.{' '}
          </Title>
        </TextLayout>

        <ImageLayout></ImageLayout>
      </Contents>
    </Container>
  );
};

const CircleAnimation = keyframes`
  0 {
    width: 0;
    padding-bottom: 0;
  }

  100% {
    width: 70%;
    padding-bottom: 70%;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  position: relative;
  background: #f6f4e6;
`;

const Circle = styled.div`
  width: 0;
  position: absolute;
  top: -35%;
  right: -30%;
  background: #fddb3a;
  border-radius: 100%;
  padding-bottom: 0;

  animation: ${CircleAnimation} 0.7s linear 0.2s forwards;
`;

const Contents = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  max-width: 1280px;
  z-index: 1;
`;

const TextLayout = styled.div`
  text-align: right;
  margin-right: 10%;
`;

const NameDescription = styled.p`
  font-size: 24px;
  font-weight: 700;
`;

const Title = styled.p`
  font-size: 30px;
  font-weight: 700;
  white-space: pre-line;
`;

const ImageLayout = styled.div`
  flex: 0 0 20%;
  background: #fff;
  padding-bottom: 20%;
`;

export default Container1;