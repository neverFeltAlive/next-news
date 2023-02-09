import { ITheme } from '@/app/StyledComponents/index.types';

//region Themes
const theme = {
  borderRadius: '20px',
  fontSize: 20,
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
  lightColor: '#494850',
  shadowColor: '#2C2C34',
  accentColor: '#EF959C',
  secondAccentColor: '#41337A',
};
//endregion

export const lightTheme: ITheme = { ...theme, ...light };
export const darkTheme: ITheme = { ...theme, ...dark };
