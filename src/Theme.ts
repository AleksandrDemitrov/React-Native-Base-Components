import {DefaultTheme} from 'styled-components';

export interface BilanzTheme extends DefaultTheme {
  fonts: {
    book: string;
    medium: string;
    bold: string;
  };
  fontSizes: number[];
  space: number[];
}

const Theme: BilanzTheme = {
  fonts: {
    book: 'CircularStd-Book',
    medium: 'CircularStd-Medium',
    bold: 'CircularStd-Bold',
  },
  fontSizes: [16, 18, 22, 24, 28, 30, 32, 48],
  space: [0, 1, 2, 4, 8, 16, 24, 32, 40],
};

export default Theme;
