import { breakpoints as bp } from '../util/consts';

export const bz = `
  transition-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);
  `;

const mq = {
  mobile: `${bp.mobile}px`,
  tablet: `${bp.tablet}px`,
  tabletSmall: `${bp.tabletSmall}px`,
  desktop: `${bp.desktop}px`,
};

export const colors = {
  dark: '#000',
  light: '#fff',
  grey: '#DBDFE8',
  greyLight: 'rgb(250, 250, 250)',
  greyLightTint: 'rgb(242, 242, 242)',
  error: '#d42b23',
  yellow: '#ffc900',
  placeholder: '#ccc',
};

export const z = {
  header: 'z-index: 10000;',
  modal: 'z-index: 40000;',
};

export const boxShadow = {
  default: '0px 4px 6px rgba(226, 226, 226, 0.25)',
};

export const font = {
  ui: {
    regular: `
      font-size: 1.6rem;
      line-height: 150%;
    `,
    title: `
    font-size: 2rem;
    font-weight: 600;
    line-height: 150%;
    `,
  },
  p: `
    font-size: 1.6rem;
    line-height: 150%;
    margin: 0;
    @media screen and (max-width: ${mq.tabletSmall}) {
        // Your mobile rules...
    }
    `,
};
