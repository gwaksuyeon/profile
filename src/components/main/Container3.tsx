import React from 'react';
import styled from 'styled-components';

const Container3: React.FC = () => {
  return (
    <Container>
      <Contents>
        <Title>Lorem ipsum dolor sit amet</Title>

        <ContentsLayout>
          <SubTitle>Skill</SubTitle>
          <SliderLayout></SliderLayout>
        </ContentsLayout>

        <ContentsLayout>
          <SubTitle>Communication</SubTitle>
          <SliderLayout></SliderLayout>
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
    margin-top: 20px;
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
  border: 1px solid #52575d;
`;

export default Container3;
