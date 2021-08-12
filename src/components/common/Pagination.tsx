import React, { useState } from 'react';
import styled from 'styled-components';

import { PAGINATION_VALUE } from 'common/variable';

interface Props {
  currentPage: number;
  onClickPage: (page: number) => void;
}

const Pagination: React.FC<Props> = ({ currentPage, onClickPage }) => {
  const [hoverId, setHoverId] = useState<number>(-1);

  return (
    <Container>
      {PAGINATION_VALUE.map((obj: any, inx: number) => (
        <PageLayout
          key={`page-${inx}`}
          colorChange={currentPage === 0 || currentPage === 6 ? true : false}>
          <PageText
            hoverId={hoverId === obj.page}
            active={currentPage === obj.page}>
            {obj.text}
          </PageText>
          <PageCircle
            active={currentPage === obj.page}
            onClick={() => onClickPage(obj.page)}
            onMouseOver={() => setHoverId(obj.page)}
            onMouseLeave={() => setHoverId(-1)}>
            <span />
          </PageCircle>
        </PageLayout>
      ))}
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  top: 50%;
  right: 2%;
  transform: translateY(-50%);
  z-index: 1;
`;

const PageLayout = styled.div<any>`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 24px;

  p {
    color: ${(props: any) => (props.colorChange ? '#fff' : '#fddb3a')};
    span {
      background: ${(props: any) => (props.colorChange ? '#fff' : '#fddb3a')};
    }
  }

  & ~ & {
    margin-top: 10px;
  }
`;

const PageText = styled.p<any>`
  color: #fff;
  margin-right: 10px;
  opacity: ${(props: any) => (props.hoverId ? 1 : props.active ? 1 : 0)};
  transition: all 0.1s ease-in-out;
  cursor: default;
  user-select: none;
`;

const PageCircle = styled.p<any>`
  width: 24px;
  height: 24px;
  transition: all 0.1s ease-in-out;
  cursor: pointer;
  padding: ${(props: any) => (props.active ? '4px' : '8px')};

  span {
    display: block;
    width: 100%;
    height: 100%;
    background: #fff;
    border-radius: 100%;
  }

  &:hover {
    padding: 4px;
  }
`;

export default Pagination;
