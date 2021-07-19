import React from 'react'
import ReactDOM from 'react-dom';

function Language(props){
   

     
         return(
          <>
          <input type="button" value="english" onClick={props.change}/>
          <input type="button" value="hebrew" onClick={props.change}/>
          </>
         )
     

}

export default Language;