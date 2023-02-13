import './App.css';
import Navbar from './component/navbar';
import Introduction from './component/introduction';

function App() {
  return (
    <div className="App">
      <header className="main">
        <Navbar></Navbar>
        <Introduction></Introduction>
      </header>
    </div>
  );
}

export default App;
