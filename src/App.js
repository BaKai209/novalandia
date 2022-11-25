import './App.css';
import SeccionFirst from './components/first seccion/SeccionFirst';
import Hotels from './components/Hoteles/Hotels';
import Vuelos from './vuelos/Vuelos';
function App() {
   return (
      <div className="App">
         <SeccionFirst/>
         <Hotels/>
         <Vuelos/>
      </div>
   );
}

export default App;