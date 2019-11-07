## react-redux repo


https://deminoth.github.io/redux/


### actions
* type const 정의
* 원하는 변경 return

### reducers
* 여러개의 reducer를 combine해서 createStore의 파라미터로 넘기면 **하나의 store**가 생성된다.
* action의 type값에 따라
* **새로운 state**를 return

### how to use
* 컴포넌트에서 원하는 액션 호출
* 리듀서에서 호출된 1번 액션의 타입에 따른 새로운 state return
* state값이 변경됨에 따라 렌더 함수가 호출되거나 등등 원하는 조작가능
