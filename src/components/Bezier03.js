import React, { Component } from 'react';

class Bezier03 extends Component {

  bezierPoints = () => {
    let cubicPoints="";
    let cp1x, cp1y, cp2x, cp2y, ptx, pty;
    const points = [
      [0,400],
      [100,300],
      [200,550],
      [300,200],
      [400,50],
      [500,400],
      [600,250],
      [700,350],
      [800,500],
      [900,425],
      [1000,525]
    ];

    // desired cubic point structure:
    // vv first item in points array
    // M 0,400
    // vv CP for point 1, CP for point 2, Point 2
    // C 50,400 150,300 100,300
    // C 150,300 250,550 200,550
    // C             300,200
    // C             400,50
    // C             500,400
    // C             600,250
    // C             700,350
    // C             800,500
    // C             900,425
    // C             1000,525

    points.map((point, i) => {
      // var mapPoint = Bezier(i, points);
      console.log("The current iteration is: " + i);
      console.log("The current element is: " + point);
      console.log("points.length: ", points.length);
      // console.log("The current mapPoint is: " + mapPoint );
      console.log("\n");
      console.log("i ----- >>> ", i);
      if (i == 0) {
        cubicPoints += "M " + points[i][0] + "," + points[i][1];
        console.log("cubicPoints: ", cubicPoints);
      }
      else {
        cp1x = Math.round((points[i][0] + points[i-1][0])/2);
        cp1y = points[i-1][1];
        // cp2x = Math.round((points[i][0] + points[i+1][0])/2);
        cp2x = (i == points.length-1) ? points[i][0] : Math.round((points[i][0] + points[i+1][0])/2);
        cp2y = points[i][1];
        ptx = points[i][0];
        pty = points[i][1];
      }
      console.log("cp1x: ", cp1x);
      console.log("cp1y: ", cp1y);
      console.log("cp2x: ", cp2x);
      console.log("cp2y: ", cp2y);
      console.log('ptx: ', ptx);
      console.log('pty: ', pty);
      console.log("- - - - - - - - - ");

      // condition ? result if true : result if falsy

      // return mapPoint;
    });

    const pathCubic05 = "C 100,50 25,75 25,100 C 25,125 300,150 25,175";

    return pathCubic05;

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
          style={{ maxHeight: 300 }}
        >
          <path
            d={
              `M 0 150` +
              this.bezierPoints()
            }
            fill="none"
            stroke="#ff37ea"
            strokeWidth={15}
          />
        </svg>
        <p>{this.bezierPoints()}</p>
      </div>
    )
  };
}


export default Bezier03