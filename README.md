# React
React.js study repository

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
