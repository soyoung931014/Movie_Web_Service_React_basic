//**  input value vs placeholder
// 공: input태그에  value,placeholder를 적용하면, input박스 안에 미리 원하는 문구를 적어 놓을 수 있다.
// 차: value속성은 초깃값을 사용자가 지우고 입력해야한다.
// placeholder은 사용자가 글자를 입력할 떄 자동으로 미리 입력된 문구가 사라진다. 
import React from 'react'
import {useState, useEffect} from 'react'
import Button from './Button'
function App() {

  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  console.log('i run all the time');
 

 /*  useEffect(() => {
    console.log('Call the api...')
  }, [keyword]) */
  //**만약 keyword가 변화할때 코드를 실행하고 싶다면, []안에 keyword를 써준다.
  //**딱 한번만 코드 실행하고싶다면 [], 특정한 어떤것이 변화할때만 코드를 실행하고 싶다면 []안에 써준다.

  useEffect(() => {
    if (keyword !=="" && keyword.length > 5) {
      console.log('search for', keyword)
    }
  }, [keyword])

  useEffect(() => {
    console.log('i run only once')
  }, [])

  useEffect(() => {
    console.log('i run when <counter> changes')
  }, [counter])
  
  useEffect(() => {
    console.log('i run when <counter><keyword> changes')
  }, [counter, keyword])
  return (
    <div>   
      <input 
      value={keyword} 
      onChange={onChange} 
      type='text' 
      placeholder='Search' />
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  )
}

export default App

