import React from 'react';
import styled from 'styled-components';
import Lottie from 'react-lottie';

import { STRENGHTS_DATA } from 'common/variable';

const Strenghts: React.FC = () => {
  return (
    <Container>
      <Contents>
        <Title>Strengths</Title>
        <SubTitle>세가지의 키워드로 말하는 '나'</SubTitle>

        <ContentsLayout>
          {STRENGHTS_DATA.map((obj: any, inx: number) => (
            <ContentsBox key={`box-${inx}`}>
              <ImageLayout>
                <Lottie
                  options={{
                    animationData: obj.iconJson,
                    loop: true,
                    autoplay: true,
                    rendererSettings: {
                      className: 'lottie=icons', // svg에 적용
                      preserveAspectRatio: 'xMidYMid slice',
                    },
                  }}
                />
              </ImageLayout>
              <BoxTitle>{obj.title}</BoxTitle>
              <BoxText>{obj.description}</BoxText>
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
  margin-bottom: 20px;
`;

const BoxText = styled.p`
  font-size: 24px;
  text-align: center;
`;

export default Strenghts;
