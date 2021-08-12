import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { SKILL_DATA, COMMUNICATION_DATA } from 'common/variable';

const Container3: React.FC = () => {
  const skillSetting = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: 'linear',
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
  };

  return (
    <Container>
      <Contents>
        <Title>Skill & Communication</Title>

        <ContentsLayout>
          <SubTitle>Skill</SubTitle>
          <SliderLayout>
            <Slider {...skillSetting}>
              {SKILL_DATA.map((obj: any, inx: number) => (
                <IconLayout key={`icons-${inx}`}>
                  {React.createElement(obj.icon)}
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
                </IconLayout>
              ))}
            </Slider>
          </SliderLayout>
        </ContentsLayout>
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
  background: #fff;
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
`;

const IconLayout = styled.div`
  position: relative;
  height: 100%;

  svg {
    display: block;
    height: 100%;
  }
`;

export default Container3;
