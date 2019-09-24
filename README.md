# :pushpin: React
React.js study repository :rocket:

----------------------------------

### 1) shouldComponentUpdate ()
* render() 함수 실행 여부를 개발자가 결정할 수 있음. 불필요한 렌더링을 막을 수 있음.
```javascript
import React, { Component } from 'react';
class TOC extends Component {
  shouldComponentUpdate (newProps, newState) {
    //  바뀐 state와 state의 값을 받을 수 있음
    if (this.props.data === newProps.data) {
      return false;
    }
    return true;
  }
}
```

### 2) setState()
> props로 받은 내용을 수정할 때는, setState()로 수정해야한다.

```javascript
<header>
  <h1><a href="/" onClick={function(e) {
        this.setState({ mode: 'welcome' });
       }.bind(this)}>{ this.state.subject.title }</a>
  </h1>
</header>
```

> shouldComponentUpdate()함수를 사용한다면 concat, Array.from()과 같은 함수를 사용해서 원본을 바꾸지 않는다.
* arr copy : **Array.from()**
* object copy : **Object.assign()**

```javasript
var a = {name: 'tonz'};
var b = Object.assign({}, a); //  {name: 'tonz'}
var c = Object.assign({left: 1, right: 2}, a);  //  {left: 1, right: 2, name: 'tonz'}
```

### 3) Component

> render 함수의 리턴 값은 항상 최상위 태그부터 시작해야한다.

```javascript
import React, { Component } extends from 'react';

class Subject extends Component {
  render () {
    return (
      <header>
        <h1>WEB</h1>
        world wide web!
      </header>
    );
  }
}

class App extends Component {
  render () {
    return (
      <div classNAme="App">
        <Subject></Subject>
      </div>
    );
  }
}

export default App;
```

### 3) props

* Subject.js

> 내부에서 this.props로 접근한다.

```javascript
class Subject extends Component {
  render () {
    return (
      <header>
        <h1>{ this.props.title }</h1>
        { this.props.sub }
      </header>
    );
  }
}
```

* App.js

```javascript
class App extends Component {
  render () {
    return (
      <div classNAme="App">
        <Subject title="WEB" sub="world wide web!"></Subject>
      </div>
    );
  }
}
```

### 4) directory structure

```
src
  -components
    -Subject.js
    :
  -App.js
```

* Subject.js

> impornt & export

```javascript
import React, { Component } extends from 'react';

class Subject extends Component {
  render () {
    return (
      <header>
        <h1>{ this.props.title }</h1>
        { this.props.sub }
      </header>
    );
  }
}

export default Subject;
```

* App.js

```javascript
import Subject from './Components/Subject'

class App extends Component {
  render () {
    return (
      <div classNAme="App">
        <Subject title="WEB" sub="world wide web!"></Subject>
      </div>
    );
  }
}
```

### 5) state

* **constructure()**
> 컴포넌트가 실행될 때, 가장 먼저 실행되며 초기화를 담당한다.
> 상위 컴포넌트 값을 하위 컴포넌트로 전달하고 싶을 때, state를 이용.

```javascript
import Subject from './Components/Subject'

class App extends Component {
  constructure (props) {
    super(props);
    this.state = {
      subject: {title: 'WEB', sub: 'world wide web!'}
    }
  }
  render () {
    return (
      <div classNAme="App">
        <Subject
          title={this.state.subject.title}
          sub={this.state.subject.sub}>
        </Subject>
      </div>
    );
  }
}
```

> state 값이 갱신되면 render()가 실행되며, 변경된 부분만 update된다.

```javascript
class Clock extends Component {
  constructure (props) {
    super(props);
    this.launchClock
    this.state = {
      //  초기 상태에 현재 시각 추가
      currentTime: (newDate()).toLocaleString('en')
    }
  }
  launchClock () {
    setInterval(() => {
      this.setState({
        //  매 초마다 현재시각으로 상태 갱신
        currentTime: (newDate()).toLocaleString('en')
      });
    }, 1000);
  }
  render () {
    return (
      <div>
      { this.state.currentTime }
      </div>
    );
  }
}
```

* **key**
> TOC 컴포넌트에서 data[i] 등의 방식으로 접근 가능함.
> 각 배열의 요소는 key로 구분하면됨. vue의 v-for의 key값과 동일.

```javascript
class App extends Component {
  constructure (props) {
    super(props);
    this.state = {
      subject: {title: 'WEB', sub: 'world wide web!'},
      contents: [
        {id: 1, title: 'HTML', desc: 'HTML is HyperText...'}
        {id: 2, title: 'CSS', desc: 'CSS is for design'}
        {id: 3, title: 'JS', desc: 'JS JS JS'}
      ]
    }
  }
  render () {
    return (
      <div classNAme="App">
        <Subject
          title={this.state.subject.title}
          sub={this.state.subject.sub}>
        </Subject>
        <TOC data={this.state.contents}></TOC>
      </div>
    );
  }
}
```

### 6) JSX

* if/else statement in JSX

```javascript
render () {
  let sessionFlag = this.props.user.session //  bull
  return (
    <div>
      <a href={(sessionFlag) ? '/logout' : '/login'}>
        {(sessionFlag) ? 'Logout' : 'Login'}
      </a>
    </div>
  )
}
```

> 다음은 틀린 구문이다. 중괄호 내에서 return문을 사용하지 않는다. 삼항 연산자를 사용한다.

```javascript
class={if(!this.props.admin) return 'hide'}
```

* JSX is converted to javascipt

<p align="center">
  <img src="./images/jsx-compile.png" width="500" >	
</p>

* data-속성

> 사용자 정의 속성을 이용할 때, data- prefix를 붙히지 않으면 React에서는 렌더링되지 않는다. HTML 표준 속성이 아니기 때뮨.

```javascript
//  rendering OK in React
<li data-object-id="321"></li>

//  not rendering in React
<li object-id="321"></li>
```

* style

> 문자열 대신 자바스크립트 객체를 전달한다. css는 카멜케이스 표기

```javascript
let smallFontSize = {fontSize: '10px'}
<input style={smallFontSize}>
```

* class & for

> React와 JSX는 class, for를 제외하면 표준 HTML 속성을 모두 사용할 수 있다.

```javascript
<div className="hidden">...</div>
:
<label htmlFor={this.props.name}>
  {this.props.label}
</label>
:
```

* Boolean 값을 속성 값으로 사용하는 경우
> disabled, required, checked, autofocus, readOnly와 같은 일부 속성은 폼 요소에만 사용한다. 속성 값은 반드시 {} 안에 자바스크립트 식으로 작성해야 한다.

```javascript
//  GOOD
<input disabled={false} />
//  XXX !!!!
<input disabled="false" />
```

### 7) Redux

> [React 적용가이드](https://d2.naver.com/helloworld/1848131)

#### 1) [React 컴포넌트 만들기](https://github.com/naver/react-sample-code/blob/master/src/component/todolist/TODOList.js): 하위 React 컴포넌트로 prop(or state)와 dispatch() 메서드를 전달한다.

```javascript
const todolistStateToProps = (state) => {
  return {
    todos: state.todos
  }
}

const todolistDispatchToProps = (dispatch) => {
    return {
        onClick(data){
          dispatch(complete(data))
        }
    }
}
//  connect의 첫번째 parameter는 state, 두번째 parameter는 dispatch 함수
export default connect(todolistStateToProps,todolistDispatchToProps)(TODOList);
```

#### 2) [액션 명령어와 액션 메서드 만들기](https://github.com/naver/react-sample-code/blob/master/src/action/todo.js#L20-L30): state 변경과 비동기 처리를 구현한다.
```javascript
function complete({complete, id}) {
	return { type: COMPLETE_TODO,  complete, id};
}

function complete2(data2) {
  return (dispatch) => {
    return fetch("api/add.json").then(
      res => res.json().then(data => dispatch(complete(data2)))
    );
  };
}
```

#### 3) [리듀서 생성](https://github.com/naver/react-sample-code/blob/master/src/reducer/todos.js#L29-L40): 스토어의 구조를 정한다.

```javascript
const todos = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state, todo(undefined, action)
      ];
    case COMPLETE_TODO:
      return state.map(t => todo(t, action));
    default:
      return state;
  }
}
```

#### 4) [dispatch() 메서드에 액션 결과 전달](https://github.com/naver/react-sample-code/blob/master/src/component/todolist/TODOList.js#L35): 액션의 결과를 전달한다.

> [Redux의 이해](https://d2.naver.com/helloworld/4966453)
