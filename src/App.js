// props 결국 Btn()함수를 불러서 banana라는 인자를 아래와 같이 보내는것과 같다.
// Btn({banana: "save changes"}) Btn은 함수
// 어떤 prop이든 Btn 컴포넌트에 보내면 그것들은 Btn 함수의 첫 번째 argument(인자)속으로 들어갈거야
// props는 첫번째 유일한 인자이다. props옆에 다른 인자 들어올 수 없음 
// btn에 함수에 props를 넘겨준 후, console.log(props)를 하고 확인을 해보자.
// 2개의 props를 볼 수 있는데 이말은 2번 렌더링이 되었다는것이다. 
// 모든 props(properties)들은 props = {} props라는 객체 안에 모조리 들어간다.
// shortcut으로서 props대신 {banana}로 대체되어 사용한다. banana말고 다른 props 가져오는경우 {banana, big}이런식으로 한다.
function Btn(props) {
  console.log(props) //{banana: 'Continue'} {banana: 'Save Changes'}
  console.log(props.big) // 2번 렌더링이니까 true, undefined나옴
  return <button
            style ={{ // 이 style들을 재 사용하고 싶어
              backgroundColor: "tomato",
              color: "white",
              padding: "10px 20px",
              border: 0,
              borderRadius: 10,
              fontSize: props.big ? 18: 9
            }}
  >
    {props.banana} {/* // 같은 banana이지만 각각의<Btn/> 컴포넌트에 따라 달리 설정이 되는걸 볼 수 있다. */}
  </button>
} 


function App() {
  return ( 
  <div>
    <Btn banana="Save Changes" big ="true"/>
    <Btn banana="Continue"/>
  </div>

  ) 
}

export default App;


