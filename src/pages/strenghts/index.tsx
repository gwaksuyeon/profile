import React from 'react';
import styled from 'styled-components';
import Lottie from 'react-lottie';

import {
  DeveloperJson,
  SuccessJson,
  ComunicationJson,
} from 'assets/lottieJson';

const Strenghts: React.FC = () => {
  const lottieOptions = (index: number) => {
    const Options = {
      animationData:
        index === 0
          ? DeveloperJson
          : index === 1
          ? SuccessJson
          : ComunicationJson,
      loop: true,
      autoplay: true,
      rendererSettings: {
        className: 'lottie=icons', // svg에 적용
        preserveAspectRatio: 'xMidYMid slice',
      },
    };

    return Options;
  };

  return (
    <Container>
      <Contents>
        <Title>Lorem ipsum dolor sit amet </Title>
        <SubTitle>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </SubTitle>

        <ContentsLayout>
          {new Array(3).fill(0).map((obj: any, inx: number) => (
            <ContentsBox key={`box-${inx}`}>
              <ImageLayout>
                <Lottie options={lottieOptions(inx)} />
              </ImageLayout>
              <BoxTitle>Lorem ipsum dolor</BoxTitle>
              <BoxText>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </BoxText>
            </ContentsBox>
          ))}
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
  align-items: center;
  width: 70%;
  height: 70%;
  max-width: 1280px;
`;

const Title = styled.p`
  font-size: 48px;
  font-weight: 800;
  text-align: center;
  margin-bottom: 20px;
`;

const SubTitle = styled.p`
  font-size: 36px;
  font-weight: 700;
  color: #52575d;
  text-align: center;
  margin-bottom: 100px;
`;

const ContentsLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 56.44%;
`;

const ContentsBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 0 0 calc(100% / 3);
  height: 100%;
  padding: 0 2%;

  & ~ & {
    border-left: 1px solid #52575d;
  }
`;

const ImageLayout = styled.div`
  width: 120px;
  height: 120px;
  background: #fff;
  margin-bottom: 24px;
`;

const BoxTitle = styled.p`
  font-size: 32px;
  font-weight: 700;
`;

const BoxText = styled.p`
  font-size: 24px;
  text-align: center;
`;

export default Strenghts;
