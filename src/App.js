import Beziers from './components/Beziers';
import BezierCurve from './components/BezierCurve';
import logo from './logo.svg';
import './App.css';

function App() {

  const startPoint = [25, 25];
  const controlPoint = [300, 175];
  const endPoint = [25, 325];
  const path = (
    <path
      d={`
        M ${startPoint}
        Q ${controlPoint} ${endPoint}
      `}
      fill="none"
      stroke="hotpink"
      strokeWidth={5}
    />
  );
  const path02 = (
    <path
      d={`
        M 25,25
        C 100,50 25,75 25,100
        C 25,125 300,150 25,175
      `}
      fill="none"
      stroke="hotpink"
      strokeWidth={5}
    />
  )

  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}



      <svg
        viewBox="0 0 200 350"
        style={{ maxHeight: 400 }}
      >
        {path}
      </svg>

      <svg
        viewBox="0 0 200 200"
        style={{ maxHeight: 400 }}
      >
        {path02}
      </svg>

      <Beziers />
      <BezierCurve />
    </div>
  );
}

export default App;
