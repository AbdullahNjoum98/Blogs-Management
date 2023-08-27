import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';
import { blogsUrl, createUrl, homeUrl } from './Constants';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
      <div className="content"></div>
        <Routes>
          <Route path={homeUrl} element={<Home />}/>
          <Route path={createUrl} element={<Create />}/>
          <Route path={`${blogsUrl}/:id`} element={<BlogDetails />}/>
          <Route path="*" element={<NotFound />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
