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
* props로 받은 내용을 수정할 때는, setState()로 수정해야한다.
* 원본 내용을 바로 setState하기 보다는 concat과 같은 함수를 사용해서 원본을 바꾸지 않는다.
