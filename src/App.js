import Header from './components/header/header';
import Nav from './components/nav/nav';
import About from './components/about/about'
import CurrentProjects from './components/current_projects/current_projects';
import Documents from './components/documents/documents';
import Projects from './components/projects/projects';
import Footer from './components/footer/footer';
import './App.css';


function App() {
  return (
    <div>
      <Header />
      <Nav />
      <About />
      <CurrentProjects />
      <Documents />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;