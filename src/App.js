import './App.css';
import { BrowserRouter } from 'react-router-dom';

import { Routes } from './Routes';
import { Menu } from './Menu';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Menu />
        <Routes />
      </div>
    </BrowserRouter>
  );
};

export default App;
