import React from 'react';
import styled from 'styled-components';

const Container5: React.FC = () => {
  return (
    <Container>
      <Title>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Title>
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
  background: #fddb3a;
`;

const Title = styled.p`
  max-width: 1280px;
  font-size: 60px;
  font-weight: 800;
`;

export default Container5;
