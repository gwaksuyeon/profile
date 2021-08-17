import React from 'react';
import styled, { keyframes } from 'styled-components';
import loadable from '@loadable/component';

const Background = loadable(() => import('components/main/background'));

interface Props {
  isAnimation: boolean;
}

const Main: React.FC<Props> = ({ isAnimation }) => {
  return (
    <Container>
      <Circle isAnimation={isAnimation} />
      <Background />

      <Contents>
        <TextLayout>
          <NameDescription>
            어, 빼어날 <span>수</span>, 예쁠 <span>연</span>?
          </NameDescription>
          <Title>
            빼어나고, 아름다운 코드를 위해 노력하는{'\n'}
            프론트엔드 개발자 곽수연입니다
          </Title>
        </TextLayout>

        <ImageLayout>
          <img src={require('assets/image/avatar.png').default} alt="avatar" />
        </ImageLayout>
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

const CircleAnimationEnd = keyframes`
  0 {
    width: 70vw;
    padding-bottom: 70vw;
  }

  100% {
    width: 0;
    padding-bottom: 0;
  }
`;

const CircleAnimation768 = keyframes`
  0 {
    width: 0;
    padding-bottom: 0;
  }

  100% {
    width: 110vw;
    padding-bottom: 110vw;
  }
`;

const CircleAnimationEnd768 = keyframes`
  0 {
    width: 110vw;
    padding-bottom: 110vw;
  }

  100% {
    width: 0;
    padding-bottom: 0;
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

const Circle = styled.div<any>`
  width: 0;
  position: absolute;
  top: -24vw;
  right: -32vw;
  background: #fddb3a;
  border-radius: 100%;
  padding-bottom: 0;
  animation: ${(props: any) =>
      props.isAnimation ? CircleAnimation : CircleAnimationEnd}
    1s ease-in-out 0s forwards;

  @media (max-width: 768px) {
    top: -25vw;
    right: -45vw;
    animation: ${(props: any) =>
        props.isAnimation ? CircleAnimation768 : CircleAnimationEnd768}
      1s ease-in-out 0s forwards;
  }
`;

const Contents = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  max-width: 1280px;
  z-index: 1;

  @media (max-width: 768px) {
    width: 80%;
  }

  @media (max-width: 480px) {
    width: 90%;
    flex-direction: column-reverse;
  }
`;

const TextLayout = styled.div`
  text-align: right;
  margin-right: 5%;

  @media (max-width: 480px) {
    text-align: center;
    margin-right: 0;
  }
`;

const NameDescription = styled.p`
  font-family: 'Angmuburi';
  font-size: 48px;
  font-weight: 700;
  color: #fff;
  text-shadow: -1px 0 #41444b, 0 1px #41444b, 1px 0 #41444b, 0 -1px #8e95a7,
    1px 1px 5px #41444b;
  margin-bottom: 20px;

  span {
    color: #fddb3a;
  }

  @media (max-width: 480px) {
    font-size: 32px;
    margin-bottom: 10px;
  }
`;

const Title = styled.p`
  font-size: 36px;
  font-weight: 700;
  white-space: pre-line;

  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

const ImageLayout = styled.div`
  flex: 0 0 30%;
  position: relative;
  padding-bottom: 30%;

  img {
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
  }

  @media (max-width: 480px) {
    width: 40%;
    flex: 0 0 40%;
    padding-bottom: 40%;
    margin-bottom: 20px;
  }
`;

export default Main;
