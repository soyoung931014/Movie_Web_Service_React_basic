// 이제 우리는 state인 minutes를 값을 리스닝 하는 input이 두 개가 있어

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
  const reset = () => {
    setMinutes(0)
  }

  return (
  <div>
   <h1 className="hi"> Super Converter</h1>
  <div>
   <label htmlFor="minutes">Minutes</label> 
   <input 
   value = {minutes} // input에서 리스닝 하는 데이터 // input에 minutes를 연결시켜준 이유: input값을 외부에서도 수정해주기 위함 // 예를 들어 reset버튼을 누른다고 해보자//그럼 input 내용을 다 지울 수 있어
   id="minutes" 
   placeholder="minutes" 
   type="number"
   onChange={onChangeFunction} //데이터를 업데이트한다. // onchange함수의 주요 포인트는 데이터를 업데이트 해주는 것이다.
   />
  {/* 이제 우리는 통제되는(controlled)input을 가지고 있고(25열) event 리스닝도 하고있어 */}
  </div>


  <div>
   <label htmlFor="hours">Hours</label>
   <input 
   value={Math.round(minutes/60)} // 나는 이벤트함수를 새로 만들어서 거기서 나눠준다생각했는데 바로 useState[0]값에서 다이렉트로 해주네?
   id="hours" 
   placeholder="Hours" 
   type="number"
   />
   <button onClick={reset}>reset</button>
   </div> 
   </div>

  ) 
}

export default App;
