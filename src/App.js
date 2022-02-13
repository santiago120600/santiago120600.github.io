import { Routes, Route } from "react-router-dom";
import Navigation from './pages/navigation';
import HomePage from './pages/home';
import NotFound from './pages/404';
import DockerDjangoBlog from './blogs/docker-django';
import {Helmet} from "react-helmet";

function App() {
  return (
    <div className="App">
       <Helmet>
          <meta charSet="utf-8" />
          <title>programundo</title>
          <meta name="description" content="blog de programación"/>
      </Helmet>
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
