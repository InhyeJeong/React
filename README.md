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
