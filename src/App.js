import './App.css';
import Main from './components/Main';
import Navbar from './components/Navbar';


function App() {
  return (
    <div className="App bg-gray-400 w-[100vw] h-[100vh]">
      <Navbar/>
      <Main/>
    </div>
  );
}

export default App;
