import { createTheme } from '@mui/material/styles';
import { blue } from '@mui/material/colors';

declare module '@mui/material/styles' {
  interface Theme {
    greenbutton: {
      main: string;
      hover: string;
    };
    redbutton: {
      main: string;
      hover: string;
    };
  }
  interface ThemeOptions {
    greenbutton?: {
      main?: string;
      hover?: string
    };
    redbutton?: {
      main?: string;
      hover?: string
    };
  }
}

export const theme = createTheme({
  palette: {
    primary: {
      main:
        blue[500],
    },
    secondary: {
      main: '#f44336',
    },
  },
  greenbutton: {
    main: '#228B22',
    hover: '#1c721c'
  },
  redbutton: {
    main: '#8B0000',
    hover: '#660505'
  }
},
);