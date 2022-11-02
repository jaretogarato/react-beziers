import React, { Component } from 'react';

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
      <ReactBezier settings={settings}>
      <div>
        <div id="cube-1"></div>
        <div id="cube-2"></div>
      </div>
      </ReactBezier>
    )
  }
}

export default Beziers;