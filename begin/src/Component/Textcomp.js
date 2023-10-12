import React, { useState } from 'react'




export default function Textcomp(props) {

  const handlebutton = () => {
    console.log("uppercase");
    let newtext = text.toUpperCase();
    setText(newtext)
    props.showalert("text is capitalised", "success") 
  }

  const handlebuttonlo = () => {
    console.log("lower case");
    let newtext = text.toLowerCase();
    setText(newtext)
    props.showalert("text is in lowercase ", "success") 

  }

  const handlebuttoncap = () => {
    console.log("first letter caps");
    let newtext = text.charAt(0).toUpperCase() + text.slice('1');
    setText(newtext)
  }

  const handlebuttonclear = () => {
    console.log(".");
    let newtext = ('');
    setText(newtext)
    props.showalert("text is cleared ", "danger") 

  }

  const handlebuttoncopy = () => {
    navigator.clipboard.writeText(text);
    props.showalert("text is copied ", "success") 

  }


  const handleonchange = (event) => {
    console.log("changed")
    setText(event.target.value);
  }
  




  const [text, setText] = useState('')


   


  return (
    <>
      <div className="container" >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control"   id="Mybox"  style={{backgroundColor:props.mode==='dark'?'rgb(14 83 146)':'white',color:props.mode==='dark'?'white':'black'}} onChange={handleonchange} value={text}  placeholder={props.placeholder} rows="8" ></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-3" onClick={handlebutton}>Convert to upper case</button>
        <button disabled={text.length===0} className="btn btn-danger mx-3 my-1" onClick={handlebuttonlo}>Convert to Lower case</button>  
        <button disabled={text.length===0} className="btn btn-success mx-3 my-1" onClick={handlebuttoncap}>Caps</button>
        <button disabled={text.length===0} className="btn btn-danger mx-3" onClick={handlebuttoncopy}>copy</button>
        
        <button disabled={text.length===0} className="btn btn-warning mx-3" onClick={handlebuttonclear}>clear</button>




      </div>
      <div className="container my-4  ">
        <h3>yo this is new container</h3>
        <p> charecters {text.length} and words {text.split(/\s+/).filter((element)=>{return element.length!==0}).length}</p>
        <p> read in {0.008 * text.split("").filter((element)=>{return element.length!==0}).length} min</p>
        <h3>preview</h3>
        <div>{text.length>0?text:'write something to view thew preview'}</div>
      </div>


    </>

  )
}
