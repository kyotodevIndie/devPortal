import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  colors: {
    primary: '#A5193B',
    primaryHover: '#DF2C59',
    primaryText: '#59031B',
    primaryDark: '#741029',
    secondaryText: '#FFE4B3',
    transparent: 'transparent',
    black: '#000',
    white: '#fff',
    orange: '#F68B1F',
    gray: {
      20: '#EEEEEE',
      30: '#DADADA',
      40: '#757575',
      50: '#4D4D4D'
    },
  },
  fonts: {
    body: `'Heebo', sans-serif`,
    heading: `'Heebo', sans-serif`,
    mono: `'Heebo', sans-serif`,
  },
  fontSizes: {
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "3.75rem",
    "7xl": "4.5rem",
    "8xl": "6rem",
    "9xl": "8rem",
  },
  fontWeights: {
    hairline: 100,
    thin: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
  },
});