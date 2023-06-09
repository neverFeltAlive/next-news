export interface ITheme {
  borderRadius: string;
  fontSize: number;
  mainColor?: string;
  lightColor?: string;
  shadowColor?: string;
  accentColor?: string;
  secondAccentColor?: string;
  breakPoints: {
    mobile: string;
    mobileLarge: string;
    tablet: string;
    laptop: string;
    laptopLarge: string;
    desktop: string;
  };
}
