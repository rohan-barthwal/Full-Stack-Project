import logo from './logo.svg';
import './App.css';
import SignUp from './components/signUp';
import Login from './components/logIn';
import{BrowserRouter , Routes , Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Routes>
      <Route path="/" element={<SignUp />}/>
    <Route path = "/login" element={<Login />}/>
     </Routes>
    </div> 
    </BrowserRouter>
  );
}

export default App;
