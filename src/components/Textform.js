import React, { useState } from "react";

export default function Textform(props) {
  const handlueupclick = () => {
    console.log(" convert uppercase uppercase click succeses"+text);
    let newtext=text.toUpperCase();
    settext(newtext);
  };

const lowercase=()=>{
let lowtext=text.toLowerCase()
settext(lowtext);




}

const clearbox=()=>{

  let emptext=""
  settext( emptext);

}





  
  const handleonchange = (event) => {


console.log("hii this is for onchange");
settext(event.target.value);

  };








  const [text, settext] = useState("");
  // 
  return (
    <div>
      <h1>{props.heading}</h1>

      <div className="form-group">
        <textarea
          className="form-control"
          value={text}
          onChange={handleonchange}
          id="mytextbox"
          rows="10"
        ></textarea>
      </div>

      <button className="btn btn-primary  " onClick={handlueupclick}>
        Convert To Uppercase
      </button>


      <button type="button" className="btn btn-warning  mx-3" onClick={lowercase}   >Convert To LowerCase</button>


      <button type="button" className="btn btn-info  mx-2" onClick={clearbox}   >Clear</button>
<div>


<h5>Total Characters:-{text.length}</h5><br/>
<p>Total Words:-{text.split(" ").length}</p>
<p>Time's to Read:-{0.008 * text.split("").length} Minutes</p>
<h3>Preview</h3>

{text}
















</div>


    </div>
  );
}
