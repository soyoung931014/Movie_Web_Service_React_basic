//** useEffect: 두 개의 argument를 가지는 function이다. 첫번째 argument에는 우리가 딱 한번만 실행하고픈
//** 코드가 될것이다.
import React from 'react'
import {useState, useEffect} from 'react'
import Button from './Button'
function App() {

  const [value, setValue] = useState('Jane')
  console.log('i run all the time')
  function clickme () {
    const newname = value === 'Jane' ? "Mike" : "Jane"
    setValue(newname)  
  }
  
  // const onlyOnce = () => {
  //   console.log('only once')
  // } 
  // useEffect(onlyOnce, [])

  // 좀 더 간단히..
  useEffect(() => {
    console.log('i run only Once')
  }, [])

  
  return (
    <div>
      <button onClick={clickme}>{value}</button>
    </div>
  )
}

export default App

