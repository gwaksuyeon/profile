import {
  SvgHtml5,
  SvgCss3,
  SvgJavascript,
  SvgTypescript,
  SvgReact,
  SvgRedux,
  SvgReduxSaga,
  SvgStyledComponent,
  SvgScss,
  SvgGit,
  SvgNotion,
  SvgSlack,
  SvgTrello,
  SvgZeplin,
} from 'assets/svg';

import {
  DeveloperJson,
  SuccessJson,
  CoummunicationJson,
} from 'assets/lottieJson';

export const ROOT_ROUTE = {
  MAIN: '/',
};

export const PAGINATION_VALUE = [
  {
    text: '',
    page: 0,
  },
  {
    text: 'Strengths',
    page: 1,
  },
  {
    text: 'Skills',
    page: 2,
  },
  {
    text: 'Project1',
    page: 3,
  },
  {
    text: 'Project2',
    page: 4,
  },
  {
    text: 'Project3',
    page: 5,
  },
  {
    text: '',
    page: 6,
  },
];

export const SKILL_DATA = [
  {
    icon: SvgHtml5,
    name: 'HTML5',
  },
  {
    icon: SvgCss3,
    name: 'CSS3',
  },
  {
    icon: SvgJavascript,
    name: 'Javascript',
  },
  {
    icon: SvgTypescript,
    name: 'Typescript',
  },
  {
    icon: SvgReact,
    name: 'React',
  },
  {
    icon: SvgRedux,
    name: 'Redux',
  },
  {
    icon: SvgReduxSaga,
    name: 'Redux-saga',
  },
  {
    icon: SvgStyledComponent,
    name: 'styled-componts',
  },
  {
    icon: SvgScss,
    name: 'SCSS',
  },
];

export const COMMUNICATION_DATA = [
  {
    icon: SvgGit,
    name: 'Git',
  },
  {
    icon: SvgZeplin,
    name: 'Zeplin',
  },
  {
    icon: SvgNotion,
    name: 'Notion',
  },
  {
    icon: SvgSlack,
    name: 'Slack',
  },
  {
    icon: SvgTrello,
    name: 'Trello  ',
  },
];

export const PROJECT_DATA = [
  {
    title: '아미퓨어',
    date: '20/08 - 21/03',
    description: '이커머스 웹사이트(화장품) \n 반응형, 결제모듈, 백오피스 개발',
    imageUrlListPc: [require('assets/image/project1_pc.png').default],
    imageUrlListMobile: [
      require('assets/image/project1_mobile1.png').default,
      require('assets/image/project1_mobile2.png').default,
      require('assets/image/project1_mobile3.png').default,
      require('assets/image/project1_mobile4.png').default,
    ],
    isAnimationPc: true,
    isAnimationMobile: true,
    link: 'https://amipure.com/',
  },
  {
    title: '더가게',
    date: '20/04 - 21/07',
    description:
      '네이버와 함께하는\n"작은가게 오래가게" 캠페인 홈페이지 \n 반응형, 백오피스 개발 ',
    imageUrlListPc: [require('assets/image/project2_pc.png').default],
    imageUrlListMobile: [
      require('assets/image/project2_mobile1.png').default,
      require('assets/image/project2_mobile2.png').default,
      require('assets/image/project2_mobile3.png').default,
      require('assets/image/project2_mobile4.png').default,
    ],
    isAnimationPc: true,
    isAnimationMobile: true,
    link: 'https://www.thegage.co.kr/',
  },
  {
    title: 'Vision XRM',
    date: '19/07 - 20/03',
    description:
      '기업 간 거래 데이터를 통한 \n 협업 관리 페이지 \n 데이터 시각화, 기획/디자인/개발 참여',
    imageUrlListPc: [require('assets/image/project3_pc.gif').default],
    imageUrlListMobile: [],
    isAnimationPc: false,
    isAnimationMobile: true,
    link: '',
  },
];

export const STRENGHTS_DATA = [
  {
    iconJson: DeveloperJson,
    title: '디자인도 개발도 가능',
    description:
      '퍼블리셔의 경험과 프론트엔드의 경험으로 디자인도, 개발도 가능합니다.',
  },
  {
    iconJson: SuccessJson,
    title: '긍정적인 마인드',
    description:
      '세상을 꽃밭으로 본다는 말을 들을 정도로 긍정적인 마인드를 가지고 있습니다.',
  },
  {
    iconJson: CoummunicationJson,
    title: '소통을 우선시',
    description: '상대방의 의견을 중요시하며, 사람들과 소통하는 것을 즐깁니다',
  },
];
