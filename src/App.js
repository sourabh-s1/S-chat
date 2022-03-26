import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Login from './Components/Login';
import { AuthProvider } from './Contexts/AuthContex'
import Chats from './Components/Chats'


function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Login/>} />
            <Route path="/chats" element={<Chats/>} />
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
