import { useState } from "react"
// state를 변경해주는데는 2가지 방법이 있다.
//1. 값을 직접 변경해주는것 ex) setCounter(4)
//2. 함수를 변경해주는것 ex)setCounter((current) => current + 1)

function App() {
  
  const [counter, setCounter] = useState(0)
  const counting = () => {
    // setCounter(counter + 1)
    setCounter((current) => current + 1)  // 이렇게 쓰는게 더 좋은 코드이다.
  }
  
  return (
    <div>
      <div>{counter}</div>
      <button onClick={counting}>Click me</button>
    </div>
  ) 
}

export default App;
