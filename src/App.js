import logo from './logo.svg';
import './App.css';
import UPbutton  from './UP/UPbutton';
import DOWNbutton  from './DOWN/DOWNbutton';

function App() {
  return (
    <>
    <h2>COUNTER</h2>
    <UPbutton/>
    <h1 class="n">0</h1>
    <DOWNbutton/>
    </>
  );
}

export default App;
