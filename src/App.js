import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './App.css';

function App(){
  
  const [bill, setBill] = useState(0.0);
  const [tip, setTip] = useState(20);
  let [split, setSplit] = useState(1);
  const [tipAmt, setTipAmt] = useState(0);
  
  function handleSubmit(){
    let answer = (bill * (tip/100)) / split
    setTipAmt(answer.toFixed(2))
  }
  
  function addWithTip(a,b) {
    console.log(a, b)
    let answer = (parseFloat(a) + parseFloat(b)) / split
    return answer;
  }

  function add(a,b) {
    console.log(b, parseFloat(b).toFixed(2))
    let answer = parseFloat(a) + parseFloat(b)
    return answer.toFixed(2);
  }
  
  function tipper(n){
    setTip(n);
    handleSubmit();
  }
  
  return(
      <div className="window">
        <div className="title">
          <h1>Tip Calculator</h1>
          <small style={{marginLeft: '10px'}}>BY JOVEN MACALDO</small>
        </div>
         
        <div>
          <div className="module">
            <label>Amount in the Bill $</label>
            <input
              type="number"
              min="0"
              step="0.1"
              precision="2"
              className="input"
              style={{fontSize: '20px'}}
              value={bill}
              onChange={e => setBill(parseFloat(e.target.value))}
          />
          </div>
          
          <div className="module">
            <label>Pecent to Tip</label>
            <div>
              <button className="tipBtn" style={{ backgroundColor: tip === 18 ? 'rgb(54,158,216)' : 'white',  color: tip === 18 ? 'white' : 'black'}} onClick={e => tipper(18)}>18% - ${(bill *(18/100)).toFixed(2)}</button>
              <button className="tipBtn" style={{ backgroundColor: tip === 20 ? 'rgb(54,158,216)' : 'white',  color: tip === 20 ? 'white' : 'black'}} onClick={e => tipper(20)}>20% - ${(bill *(20/100)).toFixed(2)}</button>
              <button className="tipBtn" style={{ backgroundColor: tip === 22 ? 'rgb(54,158,216)' : 'white',  color: tip === 22 ? 'white' : 'black'}} onClick={e => tipper(22)}>22% - ${(bill *(22/100)).toFixed(2)}</button>
              <button className="tipBtn" style={{ backgroundColor: tip === 25 ? 'rgb(54,158,216)' : 'white',  color: tip === 25 ? 'white' : 'black'}} onClick={e => tipper(25)}>25% - ${(bill *(25/100)).toFixed(2)}</button>
            </div>
          </div>
          
          <div className="module">
            <label>Number of People Splitting the Bill</label>
            <div className="btnrow">
              <div><button className="btn rowItem tipBtn" disabled={split <= 1 ? true : false} onClick={e => setSplit(split--)}>-</button></div>
              <div className="btn">{split}</div>
              <div><button className="btn rowItem tipBtn" onClick={e => setSplit(split++)}>+</button></div>
            </div>
          </div>
          
          <div className="module totals">
            <div>Base Bill: ${bill}</div>
            <div>Tip Amount ({tip}%): ${tipAmt}</div>
            <div>Bill + Tip : ${add(bill, tipAmt)}</div>
            <div>Each Person to Pay: ${addWithTip(bill,tipAmt)} </div>
          </div>
          
         

        </div>
      </div>
      
  )
}

App.propTypes = { 
  bill: PropTypes.number,
  tipAmt: PropTypes.number,
  tip: PropTypes.number,
  split: PropTypes.number,
};

export default App;