import Home from './components/Home';
import SignUp from './components/SignUp'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {

  return (
    <>
      <Router>
      <div>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/Home" element={<Home/>} />

        </Routes>
      </div>
    </Router>
       
    </>
  )
}

export default App
