import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Calculator from './presentation/components/calculator/Calculator';

function App() {
  return (
    <div className="app d-flex justify-content-center align-items-center m-0">
      <Calculator/>
    </div>
  );
}

export default App;
