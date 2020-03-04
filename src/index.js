import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// 리액트돔은 1개의 컴포넌트를 렌더링(출력) 해줌 -> 어디에? 'root'에 !
ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
