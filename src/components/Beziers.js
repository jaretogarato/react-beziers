import React, { Component } from 'react';
// import styled from 'styled-components';
import { PortalButton, CurveWrapper, CurvePoint } from '../styles/styledComponents';

// import { render } from '@testing-library/react'
import ReactBezier from "react-bezier";

const settings = [
  {
    from: "cube-1",
    to: "cube-2",
    positions: {
      start: {
        side: "bottom",
        indent: 20
      },
      end: {
        side: "top",
      },
    },
    style: "red-line",
  }
]

class Beziers extends Component {
  render(){
    return(
      <>
        <ReactBezier settings={settings}>
          <CurveWrapper>
            <CurvePoint id="cube-1"></CurvePoint>
            <CurvePoint id="cube-2"></CurvePoint>
          </CurveWrapper>
        </ReactBezier>
        <PortalButton yes>Styled Component</PortalButton>
      </>
    )
  }
}

export default Beziers;