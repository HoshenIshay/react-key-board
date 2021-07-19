import React from 'react'
import ReactDOM from 'react-dom';

function Size(props){
   

     
         return(
          <>
          <input type="button" value="20px" onClick={props.change}/>
          <input type="button" value="25px" onClick={props.change}/>
          <input type="button" value="30px" onClick={props.change}/>
          <input type="button" value="35px" onClick={props.change}/>
          <input type="button" value="40px" onClick={props.change}/>
          </>
         )
     

}

export default Size;