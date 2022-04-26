import './App.css';
import TinderCards from './TinderCards';
import Chats from "./Chats";
import ChatScreen from './ChatScreen';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/chat/:person' element={<ChatScreen />}/>
        <Route path='/chats' element={<Chats />}/>
        <Route path='/' element={<TinderCards />}/>
      </Routes>
    </div>
  );
}

export default App;