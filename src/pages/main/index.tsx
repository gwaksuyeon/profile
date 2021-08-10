import React from 'react';
import styled from 'styled-components';
import loadable from '@loadable/component';

const Main: React.FC = () => {
  return (
    <Container>
      <p>메인</p>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export default Main;
