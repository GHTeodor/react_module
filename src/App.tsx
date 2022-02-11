import React, {FC} from 'react';

import './App.css';
import {Form, Cars} from "./components";


const App: FC = () => {
  return (
      <div className="App">
        <Form/>
        <hr/>
        <Cars/>
      </div>
  );
};

export default App;