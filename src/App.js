
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
    setToDos((currentArray) => [toDo, ...currentArray])
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
    </div>
  )
}

export default App

