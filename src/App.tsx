import React from 'react';
import logo from './logo.svg';
import './App.css';
// import Form from './formComponents/Form';
import formData from './formComponents/formData.json';
import { Form } from './formComponents/Form';

function App() {
  return (
    <div className="App">
          <Form formData={formData} />
    </div>
  );
}

export default App;
