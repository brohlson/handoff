import tinycolor from 'tinycolor2';

// eslint-disable-next-line no-undef
export const sleep = m => new Promise(r => setTimeout(r, m));
export const isBrowser = () => navigator.userAgent !== 'ReactSnap';

export const isLight = color => {
  if (!color) return null;
  const c = tinycolor(color);
  return c.isLight();
};
