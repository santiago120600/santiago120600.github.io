import { Routes, Route } from "react-router-dom";
import Navigation from './pages/navigation';
import HomePage from './pages/home';
import BlogTemplate from './pages/blogTemplate';
import NotFound from './pages/404';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<BlogTemplate />} />
          <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
