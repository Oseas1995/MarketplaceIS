import React, {useState} from 'react';
import _raw from "./text.txt"
function TosText() {
    const [raw, setRaw] = useState("");
 
    fetch(_raw)
    .then(r => r.text())
    .then(text => { setRaw(text) });
   
    return (
      <div className="TosText">
        <text>{ raw }</text>
      </div>
    );
}
export default TosText