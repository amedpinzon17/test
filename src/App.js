import SearchComponent from './components/navbar';
import Sidebar from './components/sidebar';


import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <Router>
      <div>
        
        
        
       
        <Sidebar />
      
       

      <Routes>

        <Route exact path='/' element={<SearchComponent />} />
      </Routes>

     

    </div>
    </Router>
    
  );
}

export default App;
