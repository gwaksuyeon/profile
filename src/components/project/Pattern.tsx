import React from 'react';
import styled, { keyframes } from 'styled-components';

import { SvgPlus } from 'assets/svg';

interface Props {
  isAnimation: boolean;
  direction?: 'left' | 'right';
}

const Pattern: React.FC<Props> = ({ direction = 'left', isAnimation }) => {
  return (
    <Container direction={direction} isAnimation={isAnimation}>
      {new Array(96).fill(0).map((obj: any, inx: number) => (
        <SvgLayout key={`svg-${inx}`}>
          <SvgPlus color={'#fddc3a67'} />
        </SvgLayout>
      ))}
    </Container>
  );
};

const LeftAnimation = keyframes`
    0% {
        margin-left: -100%;
    }

    100%{
        margin-left: 0;
    }
`;

const LeftEndAnimation = keyframes`
    0%{
        margin-left: 0;
    }

    100% {
        margin-left: -100%;
    }
`;

const RightAnimation = keyframes`
    0% {
        margin-right: -100%;
    }

    100%{
        margin-right: 0;
    }
`;

const RightEndAnimation = keyframes`
    0%{
        margin-right: 0;
    }

    100% {
        margin-right: -100%;
    }
`;

const Container = styled.div<any>`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 0.4vw;
  position: absolute;
  top: 1.5vw;
  left: ${(props: any) => (props.direction === 'left' ? 'initial' : '1.5vw')};
  right: ${(props: any) => (props.direction === 'left' ? '1.5vw' : 'initial')};
  z-index: 1;
  animation: ${(props: any) =>
      props.direction === 'right'
        ? props.isAnimation
          ? LeftAnimation
          : LeftEndAnimation
        : props.isAnimation
        ? RightAnimation
        : RightEndAnimation}
    0.75s ease-out forwards;
`;

const SvgLayout = styled.div`
  width: 1vw;
  height: 1vw;

  svg {
    width: 100%;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export default Pattern;
