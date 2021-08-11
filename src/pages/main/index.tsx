import React from 'react';
import styled from 'styled-components';
import loadable from '@loadable/component';
import ReactPageScroller from 'react-page-scroller';

const Container1 = loadable(() => import('components/main/Container1'));
const Container2 = loadable(() => import('components/main/Container2'));
const Container3 = loadable(() => import('components/main/Container3'));
const Container4 = loadable(() => import('components/main/Container4'));
const Container5 = loadable(() => import('components/main/Container5'));
const CopyRight = loadable(() => import('components/common/CopyRight'));

const Main: React.FC = () => {
  return (
    <Container>
      <ReactPageScroller>
        <Container1 />
        <Container2 />
        <Container3 />
        <Container4 />
        <Container5 />
      </ReactPageScroller>

      <CopyRight />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export default Main;
