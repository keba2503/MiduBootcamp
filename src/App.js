
import './App.css';
import Mensaje from './components/mensaje';

const Description = () => {
  return <p> Esta es la primera practica de react</p>
}



function App() {
  return (
    <div className="App">
     <Mensaje />
     <Description />

    </div>
  );
}

export default App;
