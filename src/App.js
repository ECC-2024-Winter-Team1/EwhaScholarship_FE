<<<<<<< Updated upstream
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
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
=======
import ReviewForm from "./Components/DetailPage/ReviewForm";
import ReviewList from "./Components/DetailPage/ReviewList";

function App() {
  return (
    <div>
      <header>
>>>>>>> Stashed changes
      </header>
        <ReviewForm />
        <ReviewList />
    </div>
  );
}

export default App;