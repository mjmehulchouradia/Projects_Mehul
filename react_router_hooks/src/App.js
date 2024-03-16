// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


import './App.css';
import { BrowserRouter as Router,Route,Link } from 'react-router-dom';
import Header from './components/header';
import VideoCard from './components/videoCard';




function App() {
  return (
    <div>
        <Router>
        <Header/>
        </Router>
      <VideoCard/>
      <hr/>

    </div>
  );
}


export default App;

