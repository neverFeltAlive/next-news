import { ITheme } from '../index.types';

//region Themes
const theme: ITheme = {
  borderRadius: '20px',
  fontSize: 20,
  breakPoints: {
    mobile: '320px',
    mobileLarge: '576px',
    tablet: '768px',
    laptop: '1024px',
    laptopLarge: '1248px',
    desktop: '2560px',
  },
};

const light = {
  mainColor: '#331E36',
  lightColor: '#e1eff6',
  shadowColor: '#cee6ff',
  accentColor: '#EF959C',
  secondAccentColor: '#77a9da',
};

const dark = {
  mainColor: '#E8E9EB',
  lightColor: '#5c5b64',
  shadowColor: '#2C2C34',
  accentColor: '#EF959C',
  secondAccentColor: '#5c5c69',
};
//endregion

export const lightTheme: ITheme = { ...theme, ...light };
export const darkTheme: ITheme = { ...theme, ...dark };
