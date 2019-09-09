# React
React.js study repository

----------------------------------

### 1) shouldComponentUpdate ()
* render() 함수 실행여부를 개발자가 결정할 수 있음.
```javascript
import React, { Component } from 'react';
class TOC extends Component {
  shouldComponentUpdate () {
    return true;
  }
}
```
