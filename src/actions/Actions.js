import React from 'react'
import ReactDOM from 'react-dom';

function Actions (props){
   

     
         return(
          <>
          <input type="button" value="clearAll" onClick={props.clear}/>
          <input type="button" value="upper" onClick={props.changeStatus}/>
          <input type="button" value="lower" onClick={props.changeStatus}/>
          <input type="button" value="unDo" onClick={props.change}/>
          <br></br>
          <input type="button" value="upperAll" onClick={props.u}/>
          <input type="button" value="lowerAll" onClick={props.l}/>
          </>
         )
     

}

export default Actions;