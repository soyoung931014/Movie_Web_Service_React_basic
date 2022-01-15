// 부가 설명: flipped는 단순히 true 혹은 false인 변수이다.
// 우리가 flip버튼을 누르면 onFlip 함수가 실행되는데
// onFlip함수는 현재 값을 받아서 그 반대의 값을 내놓는다.setFliped(current => !current)

import { useState } from "react";

function App() {
  const [amount, setMount] = useState()
  const [flipped, setFlipped] = useState(false) 
  function onChangeFunction(e) {
  
    setMount(e.target.value)  
  }
  const reset = () => {
    setMount(0)
  }

  const onFlip = () => {
    setFlipped(current => !current)
    console.log(flipped) // flipped를 누르면 false부터 시작을 함. 내 생각은 기본값이 false이므로 flipped를 클릭하면 true여야하는건데 왜 false부터 시작을 하는 걸까??
  }

  return (
  <div>
    <h1 className="hi"> Super Converter</h1>
    
    <div>
    <label htmlFor="minutes">Minutes</label> 
    <input 
    value = {flipped ? amount * 60 : amount}
    id="minutes" 
    placeholder="minutes" 
    type="number"
    onChange={onChangeFunction}
    disabled={flipped}   /// {flipped === false}
    />
    </div>

    <div>
    <label htmlFor="hours">Hours</label>
    <input 
    value={flipped ? amount : Math.round(amount/60)} 
    id="hours" 
    placeholder="Hours" 
    type="number"
    disabled={!flipped} /// {flipped === true}
    onChange={onChangeFunction}
    />
    <button onClick={reset}>reset</button>
    <button onClick={onFlip}>Flipped</button>
    </div> 
   </div>

  ) 
}

export default App;
