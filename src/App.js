//import logo from './logo.svg';
import './App.css';
import Navbar from'./components/Navbar.js';
import TicTacToe from './components/TextForm.js';
import Pricing from './components/Pricing.js';

function App() {
  return (
  
  <>  
  <Navbar title="FortuneSoft"/>
  <div className="container my-3">
  <TicTacToe heading="Enter the Text to analyze"/>
  </div>
  </>
  );
}

export default App;
