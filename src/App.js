import { useState } from "react";
{/* label은 input 옆에서 사용. 만약 label누르면 옆에 input 선택됨(for로 연결) */}
// 여기는 jsx를 사용하기 때문에 html의 class와 jsx의 class는 다르다. html class는 jsx에서는 className 사용
// react.js에서 input은 uncontrolled라 한다. 즉 Input의 value는 통제불가능
function App() {
  const [minutes, setMinutes] = useState() // 0, "", 빈값 모두 아무값이 없다는 의미/ 기본적으로 useState는 array를 제공한다.
  function onChangeFunction(e) {
    //console.log(e) // SyntheticBaseEvent를 주는데 이벤트를 최적화한 가짜 이벤트임.원래의 event를 얻고싶다면 native event를 봐
    // 포인트는 target를 가지고 있다는것, target은 방금 바뀐 input을 의미. 그 안에 value를 확인해보자
    //console.log(e.target.value)
    setMinutes(e.target.value)
  }

  return (
  <div>
   <h1 className="hi"> Super Converter</h1>
   <label htmlFor="minutes">Minutes</label> 
   <input 
   value = {minutes}
   id="minutes" 
   placeholder="minutes" 
   type="number"
   onChange={onChangeFunction}
   />
   <div>You want to convert {minutes}</div>
   <label htmlFor="hours">Hours</label>
   <input id="hours" placeholder="Hours" type="number"/>
   </div>

  ) 
}

export default App;
