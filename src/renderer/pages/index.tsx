import React from 'react';
import Logo from '@/assets/logo.ico';
import { trim } from 'lodash';
import './index.less';

const App = props => {
  return (
    <div className="app">
      <img src={Logo}></img>
      <h1 className="text-indigo-500">{trim('Page Index')}</h1>
    </div>
  );
};

export default App;
