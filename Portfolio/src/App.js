
import './App.css';
import { BrowserRouter ,Routes, Route} from 'react-router-dom';
import Content from './components/Content';
import Contact from './components/Contact';
import Header from './components/header';
import Footer from './components/footer';
import ProjectsTask from './components/ProjectsTask';
function App() {
  return (
    <BrowserRouter>
    <Header name="projects & task"/> 
    <Routes>
    <Route path="/ProjectsTask.js" element={<ProjectsTask/>} />
    <Route path="/" element={<Content/>} />
    <Route path="/Contact.js" element={<Contact/>} />
    </Routes>
    <Footer/>
    </BrowserRouter>
  );
};

export default App;

