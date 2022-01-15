// 컴포넌트가 상태를 바꾼다면 다시 render한다.
// 따라서 9열에 console.log를 보면 처음 Save Changes was rendere, Continue was rendered
// 버튼 누르고 다시한번 찍으면 Revert Changes was rendered, Continue was rendered
// state변화했지만.. 모든것이render이 되었다. 우리는 어느 한 메소드를 통해 상태변경이 일어나지 않는 <Btn text="Continue"/>컴포넌트는
// 렌더링이 되지 않게 만드는 방법을 사용해본다. const MemorizedBtn = React.memo(Btn)
// 부모가 state를 변경하면(App) 아래에 있는것들이(자식)(모든게) 다시 그려진다. -> 단점: 추후에 어플리케이션이 느려지는 원인이 될 수도 있다.

// 근데 우리는 컴포넌트를 다시 그릴지 말지를 결정할 수 있어(porp이 변경되지 않는 한에서)
 import { useState } from "react"

function Btn({text, changeValue}) {
 console.log(text, "was rendered") // 콘솔로그 들어가서 꼭 확인해보자
  return (
          <button
            onClick ={changeValue}
            style ={{ // 이 style들을 재 사용하고 싶어
              backgroundColor: "tomato",
              color: "white",
              padding: "10px 20px",
              border: 0,
              borderRadius: 10,             
            }}
            >
              {text} 
            </button>
            )
} 


function App() {
 const [value, setValue] = useState("Save Changes")
 const changeValue = () => setValue("Revert Changes")
  return ( 
  <div>
    <Btn text={value} changeValue = {changeValue}/>
    <Btn text="Continue"/>
  </div>

  ) 
}

export default App;


