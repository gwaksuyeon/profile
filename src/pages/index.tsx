import React, { useState } from 'react';
import styled from 'styled-components';
import loadable from '@loadable/component';
import ReactPageScroller from 'react-page-scroller';

import { PROJECT_DATA } from 'common/variable';

const Main = loadable(() => import('pages/main'));
const Strenghts = loadable(() => import('pages/strenghts'));
const Skill = loadable(() => import('pages/skill'));
const Project = loadable(() => import('pages/project'));
const End = loadable(() => import('pages/end'));
const CopyRight = loadable(() => import('components/common/CopyRight'));
const Pagination = loadable(() => import('components/common/Pagination'));

const Pages: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(0);

  const onChangePage = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <Container>
      <ReactPageScroller
        animationTimer={800}
        customPageNumber={currentPage}
        pageOnChange={onChangePage}>
        <Main isAnimation={currentPage === 0} />
        <Strenghts />
        <Skill isAnimation={currentPage === 2} />

        {PROJECT_DATA.map((obj: any, inx: number) => (
          <Project
            key={`project-${inx}`}
            isAnimation={currentPage === inx + 3}
            direction={inx % 2 === 0 ? 'right' : 'left'}
            data={obj}
          />
        ))}

        <End isAnimation={currentPage === 6} />
      </ReactPageScroller>

      <CopyRight />
      <Pagination currentPage={currentPage} onClickPage={onChangePage} />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export default Pages;
