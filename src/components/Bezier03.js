import React, { Component } from 'react';

class Bezier03 extends Component {

  bezierPoints = () => {
    let cubicPoints="";
    let cp1x, cp1y, cp2x, cp2y, ptx, pty, colWidth;
    let points02, points03, points04, points05, points06, points07, points08, points09, points10, points11, points12, points13, points14, points15;

    const points = [
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

    colWidth = Math.round((points[0][0] + points[1][0]) / 2);

    points.map((point, i) => {
      if (i == 0) {
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

    return cubicPoints;
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
        <svg
          viewBox="0 0 1000 300"
          // style={{ maxHeight: 300 }}
        >
          <path
            d={
              this.bezierPoints()
            }
            style={styles.pathinator}
          />
        </svg>
        {/* <p>{this.bezierPoints()}</p> */}
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


export default Bezier03