import './App.css';
import Evento from './component/Evento';
import Img from './component/Img';
import Texto from './component/Texto';
import Variable from './component/Variable';

function App() {
  return (
    <div className="App">
      <Texto/>
      <Img/>
      <Variable/>
      <Evento/>
    </div>
  );
}

export default App;
