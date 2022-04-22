import './App.css';
import Header from './Header';
import TinderCards from './TinderCards';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      
      {/** Header */}
      <Header />
      <Routes>
        <Route path='/chat'></Route>


        <Route path='/' element={<TinderCards />}/>
      </Routes>
    </div>
  );
}

export default App;