
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
      <Navbar title="Text Utils" aboutText="About" />
      <div className="container my-3">
        {/* <About /> */}
        <TextForm heading="Enter the text to analyze below" />
      </div>
    </>
  );
}

export default App;
