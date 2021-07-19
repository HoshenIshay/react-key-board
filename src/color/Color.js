import React from 'react'
import ReactDOM from 'react-dom';

function Color (props){
   

     
         return(
          <>
          <input type="button" value="black" onClick={props.change}/>
          <input type="button" value="red" onClick={props.change}/>
          <input type="button" value="blue" onClick={props.change}/>
          <input type="button" value="green" onClick={props.change}/>
          <input type="button" value="yellow" onClick={props.change}/>
          <input type="button" value="orange" onClick={props.change}/>
          </>
         )
     
}


export default Color;