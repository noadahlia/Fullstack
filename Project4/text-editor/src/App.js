import './App.css';
import TextArea from './components/TextArea';
import Keyboard from './components/Keyboard';
import Options from './components/Options';

function App() {
  return (
    <div className="App">
      <div className="main-container">
        <Options />
        <TextArea />
        <Keyboard />
      </div>
    </div>
  );
}

export default App;
