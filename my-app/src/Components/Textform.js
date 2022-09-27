import React, { useState } from 'react'

export default function Textform(props) {   

    const handleUpclick=()=> {
        console.log("clicked"+text) 
        let newtext=text.toUpperCase();
        setText(newtext)
        props.showAlert("Converted to UpperCase!","Yeah ")
    }
    const handleLoclick=()=> {
        console.log("clicked"+text) 
        let newtext=text.toLowerCase();
        setText(newtext)
        props.showAlert("Converted to LowerCase!","Yeah ")
    }
    const handleSplitclick=()=> { 
        let newtext=text.split(/[ ]+/);
        setText(newtext.join(" "))
        props.showAlert("Converted to SpaceFree!","Yeah ")
    }
    const handleClearclick=()=> {
        console.log("clicked"+text) 
        let newtext='';
        setText(newtext)
        props.showAlert("Cleared Successfully","Ohh ")
    }
    const handleCopyclick=()=> {
        console.log("clicked"+text) 
        var text1=document.getElementById("exampleFormControlTextarea1")
        text1.select();
        navigator.clipboard.writeText(text1.value);
        props.showAlert("Copied to Clickboard","Yeah ")
        
    }
    const handleOnchange=(event)=> {
        console.log("clicked");
        setText(event.target.value)
    }
    const [text,setText]=useState('');
  return (
    <>
    <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
      <div className="mb-8">
  <textarea className="form-control" value={text} style={{color:props.mode==='dark'?'white':'black' , backgroundColor:props.mode === 'light'?'white':'grey'}} placeholder="Enter Your Text Here" onChange={handleOnchange} id="exampleFormControlTextarea1" rows="8"></textarea>
</div>
<button className='btn btn-primary my-2 mx-1' onClick={handleUpclick}>Convert to UPPERCASE</button>
<button className='btn btn-danger my-2 mx-1' onClick={handleLoclick}>Convert to lowercase</button>
<button className='btn btn-danger my-2 mx-1' onClick={handleClearclick}>Clear text</button>
<button className='btn btn-danger my-2 mx-1' onClick={handleCopyclick}>Copy text</button>
<button className='btn btn-danger my-2 mx-1' onClick={handleSplitclick}>Clear Spaces</button>
    </div>
    <div className="container my-3 mx-1" style={{color:props.mode==='dark'?'white':'black'}}>
      <h2>Your Text Summary</h2>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008*text.split(" ").length} Mintues read</p>
      <h2>About</h2>
    </div>
    </>
  )
}
