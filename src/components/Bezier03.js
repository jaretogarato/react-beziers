import React, { Component } from 'react';

class Bezier03 extends Component {

  bezierPoints = () => {
    let cubicPoints="";
    let cp1x, cp1y, cp2x, cp2y, ptx, pty, colWidth;
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

    colWidth = (points[0][0] + points[1][0]) / 2;
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
      // TODO: use "point" rather than "points[i]"

      // console.log("The current iteration is: " + i);
      // console.log("The current element is: " + point);
      // console.log("points.length: ", points.length);
      // console.log("The current mapPoint is: " + mapPoint );
      // console.log("\n");
      // console.log("i ----- >>> ", i);
      if (i == 0) {
        cubicPoints += "M " + points[i][0] + "," + points[i][1] + " ";
        console.log("cubicPoints: ", cubicPoints);
      }
      else {
        cp1x = Math.round((points[i][0] + points[i-1][0])/2);
        cp1y = points[i-1][1];
        cp2x = (i == points.length-1) ? points[i][0] - colWidth: Math.round((points[i][0] + points[i-1][0])/2);
        cp2y = points[i][1];
        ptx = points[i][0];
        pty = points[i][1];

        // console.log("cp1x: ", cp1x);
        // console.log("cp1y: ", cp1y);
        // console.log("cp2x: ", cp2x);
        // console.log("cp2y: ", cp2y);
        // console.log('ptx: ', ptx);
        // console.log('pty: ', pty);
        // console.log("- - - - - - - - - ");

        cubicPoints += "C " + cp1x + "," + cp1y + " " + cp2x + "," + cp2y + " " + ptx + "," + pty + " ";
      }
      // console.log ('cubicPoints: ', cubicPoints);
    });

    const pathCubic05 = "C 100,50 25,75 25,100 C 25,125 300,150 25,175";

    return cubicPoints;

  }

  render(){
    return(
      <div style={{
        backgroundColor: 'white',
        border: 'lightblue 10px solid',
        padding: '10px',
        height: '620px',
        width: '1020px'
      }}>
        <svg
          viewBox="0 0 1000 600"
          // style={{ maxHeight: 600 }}
        >
          <path
            d={
              this.bezierPoints()
            }
            fill="none"
            stroke="green"
            strokeWidth="15"
            color="green"
            strokeOpacity="1"
            visibility="visible"
            style={{
              strokeWidth:'5'
            }}
          />
        </svg>
        {/* <p>{this.bezierPoints()}</p> */}
      </div>
    )
  };
}

// const styles = {
//   heroImage: {
//     position: 'fixed',
//     top: 0, bottom: 0, left: 0, right: 0,
//   },
// }

// <?xml version="1.0" encoding="utf-8"?>
// <!-- Generator: Adobe Illustrator 26.4.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
// <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
// 	 viewBox="0 0 792 612" style="enable-background:new 0 0 792 612;" xml:space="preserve">
// <style type="text/css">
// 	.st0{fill:#FFFFFF;stroke:#000000;stroke-width:3;stroke-miterlimit:10;}
// </style>
// <path class="st0" d="M68.5,218.8c0,0,34.4,35.8,70.2,35.8s43.7-86.8,86.8-87.4c43-0.7,54.7,43.7,78.7,43.7s21.4,87.4,55.2,87.4
// 	s29.6-123.2,71.3-123.2s24.5,60.3,46.4,60.3"/>
// </svg>


export default Bezier03