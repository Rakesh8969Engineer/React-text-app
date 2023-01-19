import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Nav";
import Textform from './components/Textform'
let name = "<b> rakesh ranjan</b>";

function App() { 
  return (

  
    <>
      <Nav title="Rakesh-Text-App" aboutText="About Us"
       />
<div className="container my-3">

<Textform heading="Enter Your Text Here."/>


</div>
    </>
  );
}

export default App;
