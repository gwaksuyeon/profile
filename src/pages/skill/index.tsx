import React from 'react';
import styled, { keyframes } from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { SKILL_DATA, COMMUNICATION_DATA } from 'common/variable';

interface Props {
  isAnimation: boolean;
}

const Skill: React.FC<Props> = ({ isAnimation }) => {
  const skillSetting = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  const communicationSetting = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <Container>
      <Circle isAnimation={isAnimation} />
      <CircleTop isAnimation={isAnimation} />

      <Contents>
        <Title>Skills & Communication</Title>

        <ContentsLayout>
          <SubTitle>Skills</SubTitle>
          <SliderLayout>
            <Slider {...skillSetting}>
              {SKILL_DATA.map((obj: any, inx: number) => (
                <IconLayout key={`icons-${inx}`}>
                  {React.createElement(obj.icon)}
                  <p>{obj.name}</p>
                </IconLayout>
              ))}
            </Slider>
          </SliderLayout>
        </ContentsLayout>

        <ContentsLayout>
          <SubTitle>Communication</SubTitle>
          <SliderLayout>
            <Slider {...communicationSetting}>
              {COMMUNICATION_DATA.map((obj: any, inx: number) => (
                <IconLayout key={`icons-${inx}`}>
                  {React.createElement(obj.icon)}
                  <p>{obj.name}</p>
                </IconLayout>
              ))}
            </Slider>
          </SliderLayout>
        </ContentsLayout>
      </Contents>
    </Container>
  );
};

const CircleAnimation = keyframes`
  0 {
    width: 0;
    height: 0;
  }

  100% {
    width: 30vw; 
    padding-bottom: 30vw;
  }
`;

const CircleAnimationEnd = keyframes`
  0 {
    width: 30vw;
    padding-bottom: 30vw;
  }

  100% {
    width: 0;
    padding-bottom: 0;
  }
`;

const CircleAnimation768 = keyframes`
  0 {
    width: 0;
    height: 0;
  }

  100% {
    width: 60vw; 
    padding-bottom: 60vw;
  }
`;

const CircleAnimationEnd768 = keyframes`
  0 {
    width: 60vw;
    padding-bottom: 60vw;
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
  background: #fff;
  overflow: hidden;
`;

const Circle = styled.div<any>`
  width: 0;
  position: absolute;
  bottom: -30vh;
  left: -14vw;
  background: #f6f4e6;
  border-radius: 100%;
  padding-bottom: 0;
  animation: ${(props: any) =>
      props.isAnimation ? CircleAnimation : CircleAnimationEnd}
    1s ease-in-out 0s forwards;
  z-index: 10;

  @media (max-width: 768px) {
    bottom: -20vh;
    left: -20vw;
    animation: ${(props: any) =>
        props.isAnimation ? CircleAnimation768 : CircleAnimationEnd768}
      1s ease-in-out 0s forwards;
  }
`;

const CircleTop = styled.div<any>`
  width: 0;
  position: absolute;
  top: -30vh;
  right: -14vw;
  background: #f6f4e6;
  border-radius: 100%;
  padding-bottom: 0;
  animation: ${(props: any) =>
      props.isAnimation ? CircleAnimation : CircleAnimationEnd}
    1s ease-in-out 0s forwards;
  z-index: 10;

  @media (max-width: 768px) {
    top: -20vh;
    right: -20vw;
    animation: ${(props: any) =>
        props.isAnimation ? CircleAnimation768 : CircleAnimationEnd768}
      1s ease-in-out 0s forwards;
  }
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 70%;
  height: 70%;
  max-width: 1280px;
`;

const Title = styled.p`
  font-size: 48px;
  font-weight: 800;
  text-align: center;
  margin-bottom: 100px;

  @media (max-width: 768px) {
    margin-bottom: 40px;
  }

  @media (max-width: 480px) {
    font-size: 24px;
    margin-bottom: 20px;
  }
`;

const ContentsLayout = styled.div`
  width: 100%;

  & ~ & {
    margin-top: 60px;
  }
`;

const SubTitle = styled.p`
  font-size: 36px;
  font-weight: 700;
  color: #52575d;
  margin-bottom: 10px;

  @media (max-width: 480px) {
    font-size: 20px;
  }
`;

const SliderLayout = styled.div`
  width: 100%;
  height: 100px;

  .slick-slider,
  .slick-list,
  .slick-track,
  .slick-slide,
  .slick-slide > div {
    height: 100%;
  }

  @media (max-width: 768px) {
    .slick-slide {
      padding: 0 8px;
      box-sizing: border-box;
    }
  }
`;

const IconLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 100%;
  border-radius: 4%;
  overflow: hidden;

  svg {
    display: block;
    height: 100%;
    margin: 0 auto;
  }

  p {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 20px;
    font-weight: 700;
    text-align: center;
    line-height: 1.1;
    opacity: 0;
    z-index: 2;
  }

  &:hover {
    svg {
      background: rgba(255, 255, 255, 0.6);
      filter: blur(0.5px);
      opacity: 0.2;
    }

    p {
      opacity: 1;
    }
  }

  @media (max-width: 768px) {
    svg {
      width: 100%;
    }

    p {
      font-size: 14px;
    }
  }
`;

export default Skill;
