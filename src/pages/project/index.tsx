import React from 'react';
import styled from 'styled-components';
import loadable from '@loadable/component';

const Pattern = loadable(() => import('components/project/Pattern'));
const MockupPC = loadable(() => import('components/project/MockupPc'));
const MockupMobile = loadable(() => import('components/project/MockupMobile'));

interface Props {
  data: any;
  direction?: 'left' | 'right';
  isAnimation: boolean;
}

const Project: React.FC<Props> = ({
  data,
  direction = 'left',
  isAnimation,
}) => {
  const onClickLink = () => {
    window.open(data.link);
  };

  return (
    <Container>
      <BackGround direction={direction} />
      <Pattern direction={direction} isAnimation={isAnimation} />

      <Contents direction={direction}>
        <MockUpLayout direction={direction}>
          {data.imageUrlListPc.length > 0 && (
            <MockupPC
              isAnimation={data.isAnimationPc}
              imageUrlList={data.imageUrlListPc}
              onClickLink={onClickLink}
            />
          )}
          {data.imageUrlListMobile.length > 0 && (
            <MockupMobile
              isAnimation={data.isAnimationMobile}
              imageUrlList={data.imageUrlListMobile}
              onClickLink={onClickLink}
            />
          )}
        </MockUpLayout>
        <TextLayout direction={direction} onClick={onClickLink}>
          <TitleLayout direction={direction}>
            <Title>{data.title}</Title>
          </TitleLayout>
          <ProjectDate>{data.date}</ProjectDate>
          <Description>{data.description}</Description>
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
  overflow: hidden;
  background: #fff;
`;

const BackGround = styled.div<any>`
  width: 100%;
  height: 100%;
  position: absolute;
  background: #f6f4e6;
  transform: ${(props: any) =>
    props.direction === 'left' ? 'skewX(-30deg)' : 'skewX(30deg)'};

  @media (max-width: 768px) {
    transform: ${(props: any) =>
      props.direction === 'left' ? 'skewX(-10deg)' : 'skewX(10deg)'};
  }

  @media (max-width: 480px) {
    transform: skewX(-0deg);
  }
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

  @media (max-width: 768px) {
    width: 80%;
  }

  @media (max-width: 768px) {
    width: 90%;
    flex-direction: column;
  }
`;

const MockUpLayout = styled.div<any>`
  flex: 0 0 40%;
  max-width: 40%;
  position: relative;
  margin-right: 10%;
  margin: ${(props: any) =>
    props.direction === 'left' ? '0 10% 0 0' : '0 0 0 10%'};
  cursor: pointer;

  @media (max-width: 768px) {
    margin: ${(props: any) =>
      props.direction === 'left' ? '0 7% 0 0' : '0 0 0 7%'};
  }

  @media (max-width: 768px) {
    max-width: 60%;
    margin: 0 0 20px 0;
  }
`;

const TextLayout = styled.div<any>`
  flex: 1 1 auto;
  text-align: ${(props: any) => props.direction};
  cursor: pointer;

  @media (max-width: 768px) {
    text-align: center;
  }

  @media (max-width: 480px) {
    flex: initial;
  }
`;

const TitleLayout = styled.div<any>`
  display: flex;
  justify-content: ${(props: any) =>
    props.direction === 'left' ? 'flex-start' : 'flex-end'};
  align-items: flex-end;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
  }
`;

const Title = styled.p`
  font-size: 48px;
  font-weight: 800;

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

const ProjectDate = styled.p`
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 20px;
    margin-bottom: 4px;
  }
`;

const Description = styled.p`
  font-size: 36px;
  color: #52575d;
  line-height: 1.2;
  white-space: pre-line;

  @media (max-width: 768px) {
    font-size: 24px;
  }

  @media (max-width: 768px) {
    font-size: 20px;
    margin-bottom: 4px;
  }
`;

export default Project;
