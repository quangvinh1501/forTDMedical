import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import './App.css';
import TodoContainer from './components/TodoContainer';

function App() {
  return (
    <div className="App">
     <Router>
           <Routes>
                 <Route exact path='/' element={< TodoContainer />}></Route>
          </Routes>
       </Router>
    </div>
  );
}

export default App;
