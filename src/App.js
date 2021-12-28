import { Routes, Route, Link } from "react-router-dom";
import Navigation from './pages/navigation';
import HomePage from './pages/home';
import BlogTemplate from './pages/blogTemplate';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<BlogTemplate />} />
      </Routes>
    </div>
  );
}

export default App;
