// import React, { useState } from "react"
// import "./App.css"
// const App =()=>{
//  const [counter,setcounter]=useState(0)
//  const addCount = ()=>{
//    setcounter(counter + 1);
//   };
//   const redCount = ()=>{
//     setcounter(counter - 1);
//     if(counter === 0){
//       setcounter (counter)
//    };
//  };

//    return(
//   <div class= "container">
//       <div class="card">
//       <button onClick={addCount}>+</button>
//       <h1>{counter}</h1>
//        <button onClick={redCount}>-</button>
//        </div>
//      </div>

//   );
//  };
//  export default App

// // class component
// // class MyComponent extends React.Component{
// //   constructor(props){
// //       super(props);
// //   };
// //   render(){
// //       return(
// //           <div>
// //             <h1>
// //               My First React Component!
// //             </h1>
// //           </div>
// //       );
// //   }
// // };
// // export default MyComponent

// const App =()=>{
//   const [Counter, setCounter]=useState(0)

//   return(
//   <div>

//     <button onClick={()=>{setCounter(28)}}>+</button>
//     <h1>0</h1>
//     <button>-</button>
//   </div>
//   )
// }
// export default App



import React, {useState} from 'react'
import './App.css'

const App =()=>{
  const [counter,setcounter]=useState(0)
   
  const addCount=()=>{
    setcounter(counter+ 1)
  }
  const redCount=()=>{
    setcounter(counter-1)
    if(counter===0)
    setcounter(counter)
  }
  return(
    <div class="container">
      <div class="card">
        <button onClick={addCount}>+</button>
        <h1>{counter}</h1>
        <button onClick={redCount}>-</button>

      </div>

    </div>
  )
}
export default App