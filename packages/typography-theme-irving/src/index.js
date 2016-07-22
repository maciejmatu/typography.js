// @flow
import type { OptionsType } from 'Types'
import gray from 'gray-percentage'
import verticalRhythm from 'compass-vertical-rhythm'
import { TABLET_MEDIA_QUERY } from 'typography-breakpoint-constants'

const theme: OptionsType = {
  baseFontSize: '24px',
  baseLineHeight: '33.8px',
  googleFonts: [
    {
      name: 'Exo',
      styles: [
        '700',
      ],
    },
    {
      name: 'Yrsa',
      styles: [
        '400',
        '700',
      ],
    },
  ],
  headerFontFamily: ['Exo', 'sans-serif'],
  bodyFontFamily: ['Yrsa', 'georgia', 'sans-serif'],
  headerGray: 13,
  bodyGray: 20,
  headerWeight: 700,
  bodyWeight: 400,
  boldWeight: 700,
  overrideStyles: ({ adjustFontSizeTo, rhythm }, options) => {
    const vr = verticalRhythm({
      baseFontSize: '20px',
      baseLineHeight: '28.4px',
    })

    const styles = {
      a: {
        color: gray(options.bodyGray),
      },
      'a:hover': {
        color: '#3498DB',
      },
      blockquote: {
        ...adjustFontSizeTo('27px'),
        color: gray(30),
        paddingLeft: rhythm(3/4),
        marginLeft: 0,
        marginRight: 0,
        borderLeft: `${rhythm(1/4)} solid ${gray(13)}`,
      },
      'h3,h4,h5,h6': {
        marginBottom: rhythm(1/2),
      },
      table: {
        ...adjustFontSizeTo('20px'),
      },
      // Mobile styles.
      [TABLET_MEDIA_QUERY]: {
        html: {
          ...vr.establishBaseline(),
        },
        blockquote: {
          marginLeft: rhythm(-3/4),
          marginRight: 0,
          paddingLeft: rhythm(1/2),
        },
        table: {
          ...adjustFontSizeTo('18px'),
        },
      },
    }

    return styles
  },
}

export default theme
