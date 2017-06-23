import getMuiTheme from 'material-ui/styles/getMuiTheme'

// Colors
export const yellow        = '#ffde28'
export const blue         = '#2e90c1'
export const darkRed      = '#C1272D'
export const white        = '#ffffff'
export const black        = '#000000'
export const darkGrey     = '#757575'
export const grey         = '#DEDEDE'
export const grey50       = 'rgba(222, 222, 222, 0.5)'
export const grey30       = 'rgba(222, 222, 222, 0.7)'

// Palette
export const palette = {
  primary1Color: yellow,
  primary2Color: blue,
  primary3Color: blue,
  accent1Color: blue,
  textColor: black,
  alternateTextColor: white,
  canvasColor: white,
  borderColor: grey,
  disabledColor: grey30
}

export default getMuiTheme({ palette })
