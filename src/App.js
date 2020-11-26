import Calculator from './Calculator';
import './css/App.css';

function App() {
  return (
    <div className="App">
      <Calculator requestCalculator={console.log} />
    </div>
  );
}

export default App;
