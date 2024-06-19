import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './Pages/Home.jsx';
import "./index.css";

function App() {
  return (
    <div className="App">
    <div className="App2">
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
      </div>
      </div>
    );
}

export default App;
