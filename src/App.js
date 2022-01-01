import { Routes, Route } from "react-router-dom";
import Navigation from './pages/navigation';
import HomePage from './pages/home';
import NotFound from './pages/404';
import DockerDjangoBlog from './blogs/docker-django';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/docker+django+nginx+gunicorn" element={<DockerDjangoBlog />} />
          <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
