
import { tsConditionalType } from '@babel/types';
import React from 'react'
import {useState, useEffect} from 'react'





function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]); 
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if(toDo === "") {
      return; // 함수를 작동시키지 않는다.
    }
    setToDos((currentArray) => [toDo, ...currentArray]) //** react.js는 함수의 첫 번쨰 argument로 현재 State를 보낸다. 따라서 현재 state를 계산하거나 State를 만드는데 사용할 수 있게된다. */
    setToDo("")
  }
  console.log(toDos) // console.log도 어디에 찍히느냐에 따라 다르다. onSubmit함수에 있는거와 다르다.



  return (
    <div>   
      <h1>My To Dos({toDos.length})</h1>
     <form onSubmit={onSubmit}>
     <input 
     onChange={onChange}
     value={toDo}
     type='text' 
     placeholder='search Me'></input>
     <button>Add To Do</button> //**button을 클릭했을때 form을 submit하도록 만든다 */
     </form> 
     <hr />
     <ul>
     {toDos.map((el, index) => <li key={index}>{el}</li>)}
     </ul>
    </div>
  )
}

export default App

