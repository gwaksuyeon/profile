import React from 'react';
import styled from 'styled-components';
import loadable from '@loadable/component';
import Lottie from 'react-lottie';

import { ArrowJson } from 'assets/lottieJson';

const MockupPC = loadable(() => import('components/responsive/MockupPc'));
const MockupMobile = loadable(
  () => import('components/responsive/MockupMobile'),
);

interface Props {
  direction?: 'left' | 'right';
  data: any;
}

const Project: React.FC<Props> = ({ direction = 'left', data }) => {
  const onClickLink = () => {
    window.open(data.link);
  };

  return (
    <Container>
      <BackGround direction={direction} />
      <Contents direction={direction}>
        <MockUpLayout direction={direction}>
          {data.imageUrlListPc.length > 0 && (
            <MockupPC
              isAnimation={data.isAnimationPc}
              imageUrlList={data.imageUrlListPc}
            />
          )}
          {data.imageUrlListMobile.length > 0 && (
            <MockupMobile
              isAnimation={data.isAnimationMobile}
              imageUrlList={data.imageUrlListMobile}
            />
          )}
        </MockUpLayout>
        <TextLayout direction={direction}>
          <TitleLayout direction={direction}>
            <Title>{data.title}</Title>

            {data.link && (
              <LinkButton onClick={onClickLink}>
                <Lottie
                  options={{
                    animationData: ArrowJson,
                    loop: true,
                    autoplay: true,
                    rendererSettings: {
                      className: 'lottie=icons', // svg에 적용
                      preserveAspectRatio: 'xMidYMid slice',
                    },
                  }}
                />
              </LinkButton>
            )}
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
  max-width: 40%;
  position: relative;
  margin-right: 10%;
  margin: ${(props: any) =>
    props.direction === 'left' ? '0 10% 0 0' : '0 0 0 10%'};
`;

const TextLayout = styled.div<any>`
  flex: 1 1 auto;
  text-align: ${(props: any) => props.direction};
`;

const TitleLayout = styled.div<any>`
  display: flex;
  justify-content: ${(props: any) =>
    props.direction === 'left' ? 'flex-start' : 'flex-end'};
  align-items: flex-end;
  margin-bottom: 20px;
`;

const Title = styled.p`
  font-size: 48px;
  font-weight: 800;
  margin-right: 2%;
`;

const LinkButton = styled.div`
  width: 60px;
  height: 60px;
  transform: rotate(-90deg);
  cursor: pointer;
`;

const ProjectDate = styled.p`
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 36px;
  color: #52575d;
  line-height: 1.2;
  white-space: pre-line;
`;

export default Project;
