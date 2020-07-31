import React from 'react';
import '../css/style.css';

const MyApp = ({Component, pageProps}) => {
  return (
    <div>
      <h1>MyApp</h1>
      <div>
        <Component {...pageProps}/>
      </div>
    </div>
  )
};

export default MyApp;