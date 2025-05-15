import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './Component/Nav/Nav';
import Home from './Component/Home/Home';
import AboutSpace from './Component/AboutSpace/AboutSpace';

const App = () => {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AboutSpace" element={<space />} />
        {/* Add more routes */}
      </Routes>
    </Router>
  );
};

export default App;
