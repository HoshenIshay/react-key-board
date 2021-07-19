import React, { useEffect, useRef, useState } from 'react'
import ReactDOM from 'react-dom';
import Output from '../output/Output';
import Size from '../size/Size';
import Language from '../language/Language';
import Color from '../color/Color';
import Actions from '../actions/Actions';
import Letters from '../letters/Letters';
function Board(){
   
    let [abc,setAbc]=useState([]);
    let [prev,setPrev]=useState([]);
    let [flag,setFlag]=useState(0);
    let [currentLetter,setCurrentLetter]=useState();
    let [language,setLunguage]=useState("hebrew");
    let [size,setSize]=useState("20px");
    let [color,setColor]=useState("'black'");
     let [status,setStatus]=useState("lower");
   
    
  //  let isCh=useRef(0)
//       useEffect(()=>
//      {

//         console.log(dfg)
//  }
//     ,[flag])
 function changeLet(x) {
    console.log(x.target.value)

    setCurrentLetter(x.target.value)
    console.log(currentLetter)
    letStat()
 }
    function letStat() {

     let w=abc;
     setPrev(abc);
     console.log(prev)
     w.push({let:currentLetter,size:size,color:color}) 
     setAbc(w) ;
     console.log(abc)
    }
   
   
 
       
   function changeLanguage(x){
      
      setLunguage(x.target.value)
    }
      
    function changeSize(x){
   
      setSize(x.target.value)
    }
    function changeColor(x){
      
      setColor(x.target.value);
   }
   function changeStatus(x) {
      
      setStatus(x.target.value)
      
   }
   function clear() {
     
     setAbc([])
   }
   function getPrev() {
      
      setAbc(prev)
    setFlag(1-flag)
  
   
   }
   function upper() {
       let a=abc;
       let r;
       a.map(item=>{
        
       if(!item.let=="")
      {r=item.let.toUpperCase();
         item.let=r;
          console.log(item.let)} 
       })
       console.log(a)
       setAbc(a);
       setFlag(1-flag)
   }
   function lower() {
      let a=abc;
      let r;
      a.map(item=>{
       
      if(!item.let=="")
     {r=item.let.toLowerCase();
        item.let=r;
         console.log(item.let)} 
      })
      console.log(a)
      setAbc(a);
      setFlag(1-flag)
   }
     
         return (
          <>
          {console.log(abc)}
          <div> <Output  out={abc} /></div>
          <div><Letters status={status} language={language} change={changeLet} color={color} /></div>
          <div><Language language={language}  change={changeLanguage}/></div>
          <div><Size  size={size} change={changeSize}/></div>
          <div><Color color={color} change={changeColor}/></div>
          <div><Actions changeStatus={changeStatus} clear={clear} change={getPrev} u={upper} l={lower}/></div>
         
          
          
          
          
          
          </>
         )}
       
        
     

 export default Board;
 