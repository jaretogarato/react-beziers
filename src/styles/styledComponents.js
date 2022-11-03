import styled from 'styled-components';


// const TableStyle = styled(Table)`
//   width: 45% !important;
// `
// const TextAreaStyle = styled(TextArea)`
//   height: 125px !important;
// `
// const RightTd = styled(Table.Cell)`
//   width: 300px !important;
//   overflow: visible !important;
// `

const portalStyle = {
  // PAGE BG
  pageBgColor: '#FFF',

  // CONTAINERS
  containerBgColor1: '#C2C2C2',
  containerBgColor2: '#878787',
  // allow no bgcolor
  containerBorderColor1: '#878787',
  containerBorderColor2: '#525252',
  // allow no border color

  // MAIN FONTS
  fontFamilyMain: 'source sans pro',
  fontFamilySecondary: 'sans-serif',
  fontColorMain: '#333',
  fontColorSecondary: '#595959',
  fontColorWarning: 'd91313',
  fontColorAlert: 'ec00cd',
  fontColorImportant: 'f69e04',

  // BUTTONS
  buttonYesColor: '#614d7b',
  buttonNoColor: '#614d7b',
  buttonMaybeColor: '#614d7b',
  buttonNeutralColor: '#614d7b',

}

export const PortalButton = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.5em 1em;
  border-radius: 3px;
  border: 1px solid;
  ${'' /* default first */}
  color: ${portalStyle.buttonNeutralColor};
  color: ${props => props.yes && portalStyle.buttonYesColor};
  color: ${props => props.no && portalStyle.buttonNoColor};
  color: ${props => props.maybe && portalStyle.buttonMaybeColor};
  color: ${props => props.default && portalStyle.buttonNeutralColor};
`;

export const CurveWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-evenly;
  align-items: center;
  background-color: #ddd;
  width: 100%;
  height: 200px;
  border: 1px solid gray;
`

export const CurvePoint = styled.div`
  border: 1px solid orange;
  flex: 1 1 100%;
  height: 80%;
  background-color: #fff;
`