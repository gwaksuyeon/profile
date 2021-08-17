import React from 'react';
import styled, { keyframes } from 'styled-components';

interface Props {
  isAnimation: boolean;
  imageUrlList: string[];
}

const MockupMobile: React.FC<Props> = ({ isAnimation, imageUrlList }) => {
  return (
    <Container>
      <Header>
        <Circle color={'#eb770e'} />
        <Circle color={'#e7cc1b'} />
        <Circle color={'#4aac35'} />
      </Header>

      <ImageLayout>
        {imageUrlList.map((obj: any, inx: number) => (
          <img key={`image-${inx}`} src={obj} alt={`project1_mobile_${inx}`} />
        ))}
      </ImageLayout>
    </Container>
  );
};

const ViewAnimation = keyframes`
  0 {
    margin-left: 0;
  }

  10% {
    margin-left: 0;
  }

  25% {
    margin-left: -100%;
  }

  35% {
    margin-left: -100%;
  }

  50% {
    margin-left: -200%;
  }

  60% {
    margin-left: -200%;
  }

  75% {
    margin-left: -300%;
  }

  85% {
    margin-left: -300%;
  }
  
  100% {
    margin-left: 0;
  }
`;

const Container = styled.div`
  width: 6vw;
  height: 20vh;
  position: absolute;
  right: -5%;
  bottom: -10%;
  background: #fff;
  border-radius: 2%;
  overflow: hidden;
  z-index: 10;

  @media (max-width: 768px) {
    width: 12vw;
    height: 15vh;
    bottom: -5%;
  }

  @media (max-width: 480px) {
    width: 20vw;
    height: 15vh;
    bottom: -5%;
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 1.5vh;
  position: sticky;
  top: 0;
  background: #dddedd;
  padding: 0 0.3vw;
  z-index: 1;
`;

const Circle = styled.div<any>`
  width: 0.3vw;
  height: 0.5vh;
  background: ${(props: any) => props.color};
  border-radius: 100%;

  & ~ & {
    margin-left: 0.3vw;
  }
`;

const ImageLayout = styled.div`
  display: flex;
  width: 100%;
  animation: ${ViewAnimation} 10s ease-in-out infinite;

  img {
    display: block;
    width: 100%;
    height: 100%;
  }

  &:hover {
    animation-play-state: paused;
  }
`;

export default MockupMobile;
