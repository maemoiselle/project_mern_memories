import { createTheme} from '@material-ui/core/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Montserrat, Roboto',
  },
  
    palette: {
      primary: {
        // light: will be calculated from palette.primary.main,
        main: '#e01836',
        // dark: will be calculated from palette.primary.main,
        // contrastText: will be calculated to contrast with palette.primary.main
      },
      secondary: {
        light: '#4a9ca7',
        main: '#3373b7',
        // dark: will be calculated from palette.secondary.main,
        contrastText: '#fff',
      },
      neutral: {
        white:'#FFF',
        lightGrey: '#d7d7d7',
        mediumGrey: '#666',
        darkGrey: '#333',
        black: '#000',
      },
      // Used by `getContrastText()` to maximize the contrast between
      // the background and the text.
      contrastThreshold: 3,
      // Used by the functions below to shift a color's luminance by approximately
      // two indexes within its tonal palette.
      // E.g., shift from Red 500 to Red 300 or Red 700.
      tonalOffset: 0.2,
    },
  });

export default theme;