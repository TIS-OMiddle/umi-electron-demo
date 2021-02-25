import React from 'react';
import Logo from '@/assets/logo.ico';

const App = props => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <img src={Logo}></img>
      <h1>Page Index</h1>
    </div>
  );
};

export default App;
