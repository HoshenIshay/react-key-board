import React, {useEffect, useState } from 'react'
import ReactDOM from 'react-dom';

function Output(props) {
  console.log(props.out)
 
//  let x=props.size

  useEffect(()=>{
    
   checkS();
   
   },[props])
  function  checkS() {
     console.log() 
   }
  // let y=props.size
    //  let  [thisText,setThisText]=useState(null);
   

   //innerHtml(){
     //  this.setState({thisText:thisText+txt})
  // }
     
         return(
          <>
    
          <div style={{width:1500,height:60,borderColor:'black',border:'solid'}}>
       {props.out.map((item,index)=>
        <label key={index} style={{color:item.color,fontSize:item.size.toString()}}>{item.let}</label>)}  </div>
      
          </>
         )
     

}

export default Output;