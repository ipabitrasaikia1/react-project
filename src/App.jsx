import logo from './logo.svg';
import './App.css';
import Todos from './components/Todo';
import { useState } from 'react';

function App() {

  const MobileOS = ["Android", "Blackberry", "Iphone", "Windows phone"];
  const MobileManufac = ["Samsung", "HTC", "Micromax", "Apple"];

  const [count, setCount] = useState(0)
  let countType = "Even"

  if (count % 2 === 0) {
    countType = "Even"
  }
  else {
    countType = "Odd"
  }

  function change(value) { 

    if(value===2){
      setCount(count*value) 
    } 
    else{

      if (count <= 10) setCount(count + value) 
    }


  }
  // function decreaseOne() {

  //   if (count > 0) setCount(count - 1)
  // }

  if (count > 9) {
    return (
      <>   <h1>Counter : {count}</h1>
        <h1>Reached Max Value</h1> </>

    )
  }
 

  // 


  function getvalue(val){ 
    val.preventDefault()
 

    let x= document.getElementById("inp").value ;

    console.log(x) 
    setCount(Number(x))

  }

  return (
    <div className="App">
      <img src={logo} width={180} ></img>
      <h1 id='h1'>Mobile Operating System</h1>

      <ul>

        {MobileOS.map(e => <li>{e}</li>)}
      </ul>

      <h1 style={{ color: "black", textAlign: "left" }}>Mobile Manufactures</h1>
      <ul style={{ listStyleType: "square" }} >

        {MobileManufac.map(e => <li>{e}</li>)}
      </ul>

      {MobileOS.map(e => <Todos num={e} />)}

      <h1>Counter : {count}</h1>
      {" "}
      <button onClick={()=>{change(+1)}} >Add</button>
      <button onClick={()=>{change(-1)}}  >Decrease</button>
      <button onClick={()=>{change(2)}}  >Double</button>
    
      <h1>Type  : {countType}</h1> 

    <form action="" onSubmit={getvalue} > 
    <input type="number" id='inp'/> 
    <button type='submit' >Enter</button>
     </form>
    
   
    </div>
  );



}

export default App;
