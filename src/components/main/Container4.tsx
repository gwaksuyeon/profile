import React from 'react';
import styled from 'styled-components';

interface Props {
  direction?: 'left' | 'right';
  title: string;
  description: string;
  imageUrl?: string;
}

const Container4: React.FC<Props> = ({
  direction = 'left',
  title,
  description,
  imageUrl,
}) => {
  return (
    <Container>
      <BackGround direction={direction} />
      <Contents direction={direction}>
        <MockUpLayout direction={direction}></MockUpLayout>
        <TextLayout direction={direction}>
          <Title>{title}</Title>
          <Description>{description}</Description>
        </TextLayout>
      </Contents>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  position: relative;
  background: #fff;
`;

const BackGround = styled.div<any>`
  width: 100%;
  height: 100%;
  position: absolute;
  background: #f6f4e6;
  transform: ${(props: any) =>
    props.direction === 'left' ? 'skewX(-30deg)' : 'skewX(30deg)'};
`;

const Contents = styled.div<any>`
  display: flex;
  flex-direction: ${(props: any) =>
    props.direction === 'left' ? 'row' : 'row-reverse'};
  justify-content: center;
  align-items: center;
  width: 70%;
  height: 70%;
  max-width: 1280px;
  z-index: 1;
`;

const MockUpLayout = styled.div<any>`
  flex: 0 0 40%;
  background: #fff;
  padding-bottom: 40%;
  margin-right: 10%;
  margin: ${(props: any) =>
    props.direction === 'left' ? '0 10% 0 0' : '0 0 0 10%'};
`;

const TextLayout = styled.div<any>`
  flex: 1 1 auto;
  text-align: ${(props: any) => props.direction};
`;

const Title = styled.p`
  font-size: 48px;
  font-weight: 800;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 36px;
  font-weight: 700;
  color: #52575d;
`;

export default Container4;
