//**  Hello 컴포넌트가 등장할때마다 useEffect가 작동되는이유: hello 컴포넌트를 hide할때
//** 말그대로 그 컴포넌트를 스크린에서 지워주고 있다. 그러고는 다시 보여줄때는 이것console.log도 다시 작동한다.
//** 🌸cleanup function: 그냥 일반 함수인데 나의 컴포넌트가 destroy될 떄 뭔가 할 수 있도록 해주는것
//** 예를 들어 누군가는 컴포넌트가 없어질 때 어떤 분석 결과를 보내고 싶어할 수도 있어. 그럴떄 사용한다.
//** 중요한건 이걸로 컴포넌트가 언제 create됐는지, 언제 destroy됐는지 알 수 있다. 

//** useEffect는 언제 코드를 실행할지 알려준다. 1. 처음에 2. 무언가 변화할때 3.컴포넌트가 파괴될떄  */

import React from 'react'
import {useState, useEffect} from 'react'
import Button from './Button'

function Hello () {
  // useEffect(() =>{
  //   console.log('created');
  //   return () => console.log('destroyed'); //**cleanup function */
  // },[])
  
  //**case1 */
  // useEffect(function () {
  //   console.log('hi');
  //   return function () {
  //     console.log('bye')
  //   }
  // }, [])

  //**case2 */
  useEffect(() => {
    console.log('hi');
    return () => console.log('bye')
  },[])

  return <h1>Hello</h1>
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev)
  
  return (
    <div>   
      <h1>{showing ? <Hello /> : null}</h1>
      <button onClick={onClick}>{showing ? "hide" : "show"}</button>
    </div>
  )
}

export default App

