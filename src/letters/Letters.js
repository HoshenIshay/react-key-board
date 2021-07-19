import React, { useEffect, useImperativeHandle, useState } from 'react';
import changeText ,* as Board from '../board/Board';

function Letters(props) {
  
    let[arr, setArr] =useState(['Q','W','E','R','T','Y','U','I','O','P','A','S','D','F','G','H','J','K','L','Z','X','C','V','B','N','M',',','.']);
    let hebrew=['/',"  ' ",'ק','ר','א','ט','ו','ן','ם','פ','ש','ד','ג','כ','ע','י','ח','ל','ך','ף','ז','ס','ב','ה','נ','מ','צ','ת'];
    let englishU=['Q','W','E','R','T','Y','U','I','O','P','A','S','D','F','G','H','J','K','L','Z','X','C','V','B','N','M',',','.'];
    let englishL=['q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m',',','.'];
    let [currentLetter, setCurrentLetter]=useState(null);
    
    useEffect(()=>{
     checkL();
     setSt();
    // checkS();
    //  checkC()
    },[props])
    
    

    function setSt() {
  if(props.language=="english")  
      if(props.status==="lower")
        setArr(englishL)
      else
        setArr(englishU)
  

  }
 
    function checkL(){
    let len=props.language;
    len=len==="english"?englishL:hebrew
    setArr(len)
   
    }
    // function  checkS() {
    //  let s=props.size;

    // }
    //  function clickLetter(e){
    //  setCurrentLetter(e.target.value)
    //  changeText(currentLetter)
    //  console.log(currentLetter)
    // }

   
         return(
          <>
          {/* {check} */}
        {arr.map((item ,index)=>{
            if (index==9||index==19)
            return(<br  key={index}></br>) 
        return(
         <input key={index} type="button" value={item} onClick={props.change}/>
        
        )}
        )}
          </>
         )
     
}

export default Letters;