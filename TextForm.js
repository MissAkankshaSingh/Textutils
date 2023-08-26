import React,{useState} from 'react'

export default function TextForm(props) {
  const handleUpClick =()=>{
     let newText=text.toUpperCase();
     setText(newText)
     props.showAlert("Converted to uppercase","success");
 }

 const handleLoClick =()=>{
   let newText=text.toLowerCase();
   setText(newText)
   props.showAlert("Converted to lowercase","success");
 }

const handleClearClick =()=>{
   let newText=" ";
   setText(newText);
   props.showAlert("Text cleared","success");
}
const handleExtraSpaces =()=>{
  let newText=text.split(/[ ]+/);
  setText(newText.join(" "));
  props.showAlert("Removed ExtraSpace ","success");
} 

const handleCopy =()=>{
  console.log("Copied");
  var text=document.getElementById("myBox");
  text.select();
  navigator.clipboard.writeText(text.value);
  props.showAlert("Text copied ","success");
}
   
const handleOnChange=(event)=>{
   //console.log("On change");
   setText(event.target.value)
}

const[text,setText]=useState('');
//setText("new text");
  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'#1f275f'}}>
      <h1>{props.heading}</h1>
  <div className="mb-3">
  <textarea className="form-control"value={text}onChange={handleOnChange}style={{backgroundColor:props.mode==='dark'?'grey':'white',
  color: props.mode==='dark'?'white':'#1f275f'}}  id="myBox" rows="5"></textarea>
  </div>
  <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to uppercase</button>
  <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
  <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
  <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Space</button>
  <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear</button>
    </div>
    <div className="container my-3" style={{color:-props.mode==='dark'?
    'white':'#1f275f'}}>
      <h2> Your text summary</h2>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008*text.split(" ").length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
    </div>
    </>
  )
}
