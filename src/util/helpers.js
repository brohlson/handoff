import tinycolor from 'tinycolor2';

export const sleep = m => new Promise(r => setTimeout(r, m));

export const isLight = color => {
  if (!color) return null;
  const c = tinycolor(color);
  return c.isLight();
};
