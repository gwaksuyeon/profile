import React from 'react';
import styled, { keyframes } from 'styled-components';

interface Props {
  isAnimation: boolean;
  imageUrlList: string[];
}

const MockupPC: React.FC<Props> = ({ isAnimation, imageUrlList }) => {
  return (
    <Container>
      <Header>
        <Circle color={'#eb770e'} />
        <Circle color={'#e7cc1b'} />
        <Circle color={'#4aac35'} />
      </Header>

      <ImageLayout isAnimation={isAnimation}>
        {imageUrlList.map((obj: any, inx: number) => (
          <Image
            key={`img-${inx}`}
            src={obj}
            alt={`project-${inx + 1}_pc`}
            isAnimation={isAnimation}
          />
        ))}
      </ImageLayout>
    </Container>
  );
};

const ViewAnimation = keyframes`
    0% {
        transform: translateY(0);
   }

    50% {
        transform: translateY(-80%);
    }

    100% {
        transform: translateY(0);
   }
`;

const ViewAnimation768 = keyframes`
    0% {
        transform: translateY(0);
   }

    50% {
        transform: translateY(-45%);
    }

    100% {
        transform: translateY(0);
   }
`;

const Container = styled.div`
  width: 100%;
  height: 30vh;
  background: #fff;
  border-radius: 2%;
  overflow: hidden;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 4vh;
  position: sticky;
  top: 0;
  background: #dddedd;
  padding: 1vw;
  z-index: 1;
`;

const Circle = styled.div<any>`
  width: 0.6vw;
  height: 1vh;
  background: ${(props: any) => props.color};
  border-radius: 100%;

  & ~ & {
    margin-left: 1vw;
  }
`;

const ImageLayout = styled.div<any>`
  width: 100%;
  height: ${(props: any) => (props.isAnimation ? 'auto' : '100%')};
  max-height: 26vh;
`;

const Image = styled.img<any>`
  display: block;
  width: 100%;
  height: ${(props: any) => (props.isAnimation ? 'auto' : '100%')};
  animation: ${(props: any) => props.isAnimation && ViewAnimation} 40s linear
    infinite;

  &:hover {
    animation-play-state: paused;
  }

  @media (max-width: 768px) {
    animation: ${(props: any) => props.isAnimation && ViewAnimation768} 30s
      linear infinite;
  }
`;

export default MockupPC;
