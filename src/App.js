// eslint-disable-next-line
import logo from './logo.svg';
import './App.css';
import Left from './components/Left';
import Right from './components/Right';

function App() {
  return (
    <div className="App">
        <div className="column left">
            <Left />
        </div>
        <div className="column right">
            <Right />
        </div>
    </div>
  );
}

export default App;