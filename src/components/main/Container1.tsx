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
    width: 70vw;
    padding-bottom: 70vw;
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
  top: -24vw;
  right: -32vw;
  background: #fddb3a;
  border-radius: 100%;
  padding-bottom: 0;

  animation: ${CircleAnimation} 1s ease-in-out 0.1s forwards;
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
  font-size: 36px;
  font-weight: 700;
`;

const Title = styled.p`
  font-size: 40px;
  font-weight: 700;
  white-space: pre-line;
`;

const ImageLayout = styled.div`
  flex: 0 0 30%;
  background: #fff;
  padding-bottom: 30%;
`;

export default Container1;
