import { configureFonts, DefaultTheme } from 'react-native-paper';
import { Theme } from 'react-native-paper/src/types';
import { blue, red, darkBlack, black, lightBlue, gray } from '@pxblue/colors';

type FontWeight = 'normal' | 'bold' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900';

const defaultFontConfig = {
    regular: {
        fontFamily: 'OpenSans-Regular',
        fontWeight: '400' as FontWeight,
    },
    medium: {
        fontFamily: 'OpenSans-SemiBold',
        fontWeight: '600' as FontWeight,
    },
    light: {
        fontFamily: 'OpenSans-Light',
        fontWeight: '300' as FontWeight,
    },
    thin: {
        fontFamily: 'OpenSans-Light',
        fontWeight: '100' as FontWeight,
    },
};

const fontConfig = {
    default: defaultFontConfig,
    ios: defaultFontConfig,
    android: defaultFontConfig,
};

export const darkTheme: Theme = {
    ...DefaultTheme,
    dark: true,
    roundness: 4,
    fonts: configureFonts(fontConfig),
    colors: {
        ...DefaultTheme.colors,
        primary: blue[500],
        accent: lightBlue[500],
        background: darkBlack[100],
        surface: black[900],
        error: red[500],
        text: gray[300],
        onBackground: gray[300],
        onSurface: gray[300],
        notification: lightBlue[500],
    },
};