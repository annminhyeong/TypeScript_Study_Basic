import React, { useState } from 'react';
import './App.css';

let 박스: JSX.Element = <div></div>;

function App() {
  //useState는 타입지정 따로 안해도 됨
  let [user, setUser] = useState<string | number>('');

  return (
    <div className='App'>
      <h4>안녕하세요</h4>
      <Profile name='철수' age='20' />
    </div>
  );
}

function Profile(props: { name: string; age: string }): JSX.Element {
  return (
    <div>
      <h4>{props.name}</h4>
    </div>
  );
}

export default App;
