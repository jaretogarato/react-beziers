import React, { Component } from 'react';

class Bezier04 extends Component {

  bezierPoints = (points) => {
    let cubicPoints="";
    let cp1x, cp1y, cp2x, cp2y, ptx, pty, colWidth;
    let vSlices=16;


    // const points = [
    //   [0,200],
    //   [100,150],
    //   [200,275],
    //   [300,100],
    //   [400,25],
    //   [500,200],
    //   [600,125],
    //   [700,175],
    //   [800,250],
    //   [900,200],
    //   [1000,250]
    // ];

    console.log(points);

    colWidth = Math.round((points[0][0] + points[1][0]) / 2);
    console.log('colWidth: ', colWidth);
    points.map((point, i) => {
      console.log('point: ', point);
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

    return (
      <svg
        viewBox="0 0 1000 300"
      >
        <path
          d={
            cubicPoints
          }
          style={styles.pathinator}
        />
      </svg>
    )
  }

  drawSpectrumOverTime = () => {
    const vSlices=16;
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
    return(this.bezierPoints(refPoints));
  }


  render(){
    return(
      <div style={{
        backgroundColor: 'white',
        border: 'lightblue 10px solid',
        padding: '10px',
        height: '320px',
        width: '1020px'
      }}>
        {/* {this.bezierPoints()} */}
        {this.drawSpectrumOverTime()}
      </div>
    )
  };
}

const styles = {
  pathinator: {
    strokeWidth: '5',
    strokeOpacity: "1",
    stroke: "pink",
    fill: "none",
  },
}


export default Bezier04