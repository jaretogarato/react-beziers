import React, { Component } from 'react';

import Bezier from "bezier-curve";

// const settings = [
//   {
//     from: "cube-1",
//     to: "cube-2",
//     positions: {
//       start: {
//         side: "bottom",
//         indent: 20
//       },
//       end: {
//         side: "top",
//       },
//     },
//     style: "red-line",
//   }
// ]

// var points = [
//   [-1.0,  0.0],
//   [-0.5,  0.5],
//   [ 0.5, -0.5],
//   [ 1.0,  0.0]
// ];


// for(var t=0; t<1; t+=0.01) {
//   var point = bezier(t, points);
// }

class BezierCurve extends Component {
  bezierPoints = () => {
    var points = [
      [-1.0,  0.0],
      [-0.5,  0.5],
      [ 0.5, -0.5],
      [ 1.0,  0.0]
    ];
    // return points.map(point => {
    //   return (
    //     point
    //   )
    // })
    return points.map((point, index) => {
      var mapPoint = Bezier(index, points);
      console.log("The current iteration is: " + index);
      console.log("The current element is: " + point);
      console.log("The current mapPoint is: " + mapPoint )
      console.log("\n");

      return point; //equivalent to list[index]
    })

    // for(var t=0; t<1; t+=0.01) {
    //   var point = bezier(t, points);
    // }
  }
  render(){
    return(
      <>
        <p>hello</p>
        {/* <Bezier>

        </Bezier> */}
        { this.bezierPoints() }
        <p>yo</p>
      </>
    )
  }
}

export default BezierCurve;