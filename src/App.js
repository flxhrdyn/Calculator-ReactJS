import { useState } from 'react';
import * as math from 'mathjs';
import './App.css';
import Button from './components/Button';
import Input from './components/input';


const App = () => {
  const [result, setResult] = useState("")
  const [text, setText] = useState("")

  const addInput = (val) => {
    if (val === "." && text[text.length - 1] && text[text.length - 1].includes(".")) {
      return; 
    }
    setText((text) => [...text, val]);
  };
  
  const clearInput = () => {
    setText("")
    setResult("")
  }
  const calculate = () => {
    const input = text.join("");
    setResult(math.evaluate(input));
  };

  const buttonColor = "#27374D";

  return (
    <div className="App">
      <div className='title'>
        <h1>Felix's Calculator</h1>
      </div>
      <div className='calc-wrapper'>
        <Input text={text} result={result}/>

        <Button symbol= "Clear" color="#E74646" handleClick={clearInput}/>

        <div className='button-row'>
        <Button symbol= "7" handleClick={addInput}/>
        <Button symbol= "8" handleClick={addInput}/>
        <Button symbol= "9" handleClick={addInput}/>
        <Button symbol= "/" color={buttonColor} handleClick={addInput}/>
        </div>

        <div className='button-row'>
        <Button symbol= "4" handleClick={addInput}/>
        <Button symbol= "5" handleClick={addInput}/>
        <Button symbol= "6" handleClick={addInput}/>
        <Button symbol= "*" color={buttonColor} handleClick={addInput}/>
        </div>

        <div className='button-row'>
        <Button symbol= "1" handleClick={addInput}/>
        <Button symbol= "2" handleClick={addInput}/>
        <Button symbol= "3" handleClick={addInput}/>
        <Button symbol= "-" color={buttonColor} handleClick={addInput}/>
        </div>

        <div className='button-row'>
        <Button symbol= "0" handleClick={addInput}/>
        <Button symbol= "." handleClick={addInput}/>
        <Button symbol= "=" color={buttonColor} handleClick={calculate}/>
        <Button symbol= "+" color={buttonColor} handleClick={addInput}/>
        </div>

      </div>
    </div>
  );
}

export default App;
