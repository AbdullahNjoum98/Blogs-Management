import './App.css';
import Navbar from './navbar-component/navbar';
import Home from './home-component/home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Create from './create-blog-component/create-blog';
import BlogDetails from './blog-details-component/blog-details';
import NotFound from './not-found-component/not-found';
import { blogsUrl, createUrl, homeUrl } from './helpers/constants';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
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
