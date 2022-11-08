import React, { Component } from 'react';

class Bezier04 extends Component {

  refPoints = [
    [0,200],
    [100,150],
    [200,275],
    [300,100],
    [400,25],
    [500,200],
    [600,125],
    [700,175],
    [800,250],
    [900,200],
    [1000,250]
  ];

  colors = [
    250, 255, 260, 265, 270, 275, 280, 285, 290, 295, 300, 305, 310, 315, 320, 325
  ];

  bezierPoints = (points) => {
    let cubicPoints="";
    let cp1x, cp1y, cp2x, cp2y, ptx, pty, colWidth;

    // console.log("points: ", points);

    colWidth = Math.round((points[0][0] + points[1][0]) / 2);
    // console.log('colWidth: ', colWidth);
    points.forEach((point, i) => {
      // console.log('point: ', point);
      if (i === 0) {
        cubicPoints += "M " + point[0] + "," + point[1] + " ";
      }
      else {
        cp1x = point[0] - colWidth;
        cp1y = points[i-1][1];
        cp2x = point[0] - colWidth;
        cp2y = point[1];
        ptx = point[0];
        pty = point[1];
        cubicPoints += "C " + cp1x + "," + cp1y + " " + cp2x + "," + cp2y + " " + ptx + "," + pty + " ";
      }
    });
    // console.log("cubicPoints::: ",cubicPoints);

    return(cubicPoints);
  }

  makeSpectraStyles(totalSlices, sliceIndex, startHue, endHue) {
    console.log("totalSlices: ", totalSlices);
    console.log("sliceIndex: ", sliceIndex);
    console.log("startHue: ", startHue);
    console.log("endHue: ", endHue);

    let range = Math.abs(startHue-endHue);
    console.log("range: ", range);
    let sliceSize = range / totalSlices;
    console.log ('sliceSize: ', sliceSize);
    let currentHue = Math.round((sliceIndex * sliceSize) + startHue);
    console.log('currentHue: ', currentHue);
    let outputCss = {
      strokeWidth: '4',
      strokeOpacity: '.9',
      fill: 'none',
      stroke: 'hsl(' + currentHue + ', 76%, 72%)'
    }

    // console.log('outputCss: ', outputCss);

    return outputCss;

  }

  makeTimeSlice = (i) => {
    let spectrumHeight = 300;

    const refPoints = [
      [0,200],
      [100,150],
      [200,275],
      [300,100],
      [400,25],
      [500,200],
      [600,125],
      [700,175],
      [800,250],
      [900,200],
      [1000,250]
    ];

    // pointsAtLastIteration = [
    //   [0, (300-refPoints[15][1])]
    // ]

    // pointsAt
  }

  render(){
    return(
      <div id="chaka" style={{
        backgroundColor: 'white',
        border: 'gray 10px solid',
        padding: '10px',
        height: '320px',
        minHeight: '320px',
        width: '1020px'
      }}>
        {/* <h2>lalala</h2> */}
        {/* {this.bezierPoints()} */}
        {/* {this.drawSpectrumOverTime()} */}

       {this.colors.map((point, i) => {
          let spectrum = this.bezierPoints(this.refPoints);

          // console.log('spectrum ', spectrum);

          return (
            <div>

              <svg
                viewBox="0 0 1000 300"
              >
                <path
                  d={
                    spectrum
                  }
                  // style={ styles.strokeColor }
                  // totalSlices, sliceIndex, startHue, endHue vv
                  style={ this.makeSpectraStyles(16, i, 250, 350) }

                />
              </svg>
            </div>
          )
        })
  }

      </div>
    )
  };
}

const baseStyles = {
  pathinator: {
    strokeWidth: '4',
    strokeOpacity: ".9",
    fill: "none",
    // stroke: "hsl(350, 76%, 72%)"
  }
}
const styles ={
  strokeColor: {
    ...baseStyles.pathinator,
    stroke: "hsl(350, 76%, 72%)",
  },
}



export default Bezier04