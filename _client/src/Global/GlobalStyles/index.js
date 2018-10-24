import { createGlobalStyle, css } from 'styled-components'
import { colors } from '../Variables'
import color from 'tinycolor2'

const GlobalStyles = createGlobalStyle`
  html,
  body {
    background: ${colors.white};
    color: ${colors.text};
    font-family: sans-serif;
    height: 100%;
    margin: 0;
    padding: 0;
  }

  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  a {
    color: ${colors.primary};

    &:hover {
      color: ${color(colors.primary).darken(10).toString()};
    }
  }
`

export default GlobalStyles
