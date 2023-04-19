import { extendTheme } from 'native-base';

export const THEME = extendTheme({
    colors: {
        blue: '#364D9D',
        'blue-light': '#647AC7',
        'red-light': '#EE7979',

        gray: {
            100: '#1A181B',
            200: '#3E3A40',
            300: '#5F5B62',
            400: '#9F9BA1',
            500: '#D9D8DA',
            600: '#EDECEE',
            700: '#F7F7F8',
        },
        white: '#FFFFFF',
    },
    fonts: {
        heading: 'Karla_700Bold',
        body: 'Karla_400Regular',
    },
    fontSizes: {
        xs: 12,
        sm: 14,
        md: 16,
        xl: 20,
        '2xl': 24,
    },
    sizes: {
        14: 56,
        22: 88,
    }

})