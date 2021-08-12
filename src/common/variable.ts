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
    SvgZeplin
  } from 'assets/svg';

export const ROOT_ROUTE = {
    MAIN: '/'
}

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
        text: 'Project',
        page: 3,
    },
    {
        text: '',
        page: 6,
    }
]

export const SKILL_DATA = [
    {
        icon: SvgHtml5,
        name: 'HTML5'
    },
    {
        icon: SvgCss3,
        name: 'CSS3'
    },
    {
        icon: SvgJavascript,
        name: 'Javascript'
    },
    {
        icon: SvgTypescript,
        name: 'Typescript'
    },
    {
        icon: SvgReact,
        name: 'React'
    },
    {
        icon: SvgRedux,
        name: 'Redux'
    },
    {
        icon: SvgReduxSaga,
        name: 'Redux-saga'
    },
    {
        icon: SvgStyledComponent,
        name: 'styled-componts'
    },
    {
        icon: SvgScss,
        name: 'SCSS'
    }
]

export const COMMUNICATION_DATA = [
    {
        icon: SvgGit,
        name: 'Git'
    },
    {
        icon: SvgZeplin,
        name: 'Zeplin'
    },
    {
        icon: SvgNotion,
        name: 'Notion'
    },
    {
        icon: SvgSlack,
        name: 'Slack'
    },
    {
        icon: SvgTrello,
        name: 'Trello  '
    }
]