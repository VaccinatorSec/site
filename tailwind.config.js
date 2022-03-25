// https://www.radix-ui.com/docs/colors/palette-composition/the-scales
const { violet, violetDark, grass, grassDark, red, redDark } = require('@radix-ui/colors');

module.exports = {
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}"
    ],
    theme: {
        extend: {
            colors: {
                // https://www.radix-ui.com/docs/colors/palette-composition/the-scales#indigo
                'primary': {
                    1: violet.violet1,
                    2: violet.violet2,
                    3: violet.violet3,
                    4: violet.violet4,
                    5: violet.violet5,
                    6: violet.violet6,
                    7: violet.violet7,
                    8: violet.violet8,
                    9: violet.violet9,
                    10: violet.violet10,
                    11: violet.violet11,
                    12: violet.violet12
                },
                'primary-dark': {
                    1: violetDark.violet1,
                    2: violetDark.violet2,
                    3: violetDark.violet3,
                    4: violetDark.violet4,
                    5: violetDark.violet5,
                    6: violetDark.violet6,
                    7: violetDark.violet7,
                    8: violetDark.violet8,
                    9: violetDark.violet9,
                    10: violetDark.violet10,
                    11: violetDark.violet11,
                    12: violetDark.violet12
                },
                // https://www.radix-ui.com/docs/colors/palette-composition/the-scales#grass
                'success': {
                    1: grass.grass1,
                    2: grass.grass2,
                    3: grass.grass3,
                    4: grass.grass4,
                    5: grass.grass5,
                    6: grass.grass6,
                    7: grass.grass7,
                    8: grass.grass8,
                    9: grass.grass9,
                    10: grass.grass10,
                    11: grass.grass11,
                    12: grass.grass12
                },
                'success-dark': {
                    1: grassDark.grass1,
                    2: grassDark.grass2,
                    3: grassDark.grass3,
                    4: grassDark.grass4,
                    5: grassDark.grass5,
                    6: grassDark.grass6,
                    7: grassDark.grass7,
                    8: grassDark.grass8,
                    9: grassDark.grass9,
                    10: grassDark.grass10,
                    11: grassDark.grass11,
                    12: grassDark.grass12
                },
                // https://www.radix-ui.com/docs/colors/palette-composition/the-scales#red
                'error': {
                    1: red.red1,
                    2: red.red2,
                    3: red.red3,
                    4: red.red4,
                    5: red.red5,
                    6: red.red6,
                    7: red.red7,
                    8: red.red8,
                    9: red.red9,
                    10: red.red10,
                    11: red.red11,
                    12: red.red12
                },
                'error-dark': {
                    1: redDark.red1,
                    2: redDark.red2,
                    3: redDark.red3,
                    4: redDark.red4,
                    5: redDark.red5,
                    6: redDark.red6,
                    7: redDark.red7,
                    8: redDark.red8,
                    9: redDark.red9,
                    10: redDark.red10,
                    11: redDark.red11,
                    12: redDark.red12
                }
            }
        }
    },
    plugins: []
}
