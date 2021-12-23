import logo from './logo.svg';
import './App.css';

function App() { 

  const MobileOS = ["Android" , "Blackberry" , "Iphone" , "Windows phone"] ;
  const MobileManufac = ["Samsung","HTC","Micromax","Apple"] ;
  return (
    <div className="App">
         <img src={logo} width={180} ></img>
         <h1 id='h1'>Mobile Operating System</h1>
         
      <ul>

            { MobileOS.map(e => <li>{e}</li>)}
      </ul> 

           <h1 style={{ color: "black" , textAlign:"left"}}>Mobile Manufactures</h1>
      <ul style={{listStyleType:"square"}} >
       
      { MobileManufac.map(e => <li>{e}</li>)}
      </ul>
    </div>
  );
}

export default App;
