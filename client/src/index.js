import React from 'react';
import ReactDOM from 'react-dom';

const App = () => (
  <div id="main-container">
    <div className='main-container-box'>
      check
    </div>
    <div className='main-container-box'>
    </div>
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));

// Hot Module Replacement
if (module.hot) {
  module.hot.accept();
}