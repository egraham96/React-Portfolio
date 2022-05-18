import Header from './components/header/header'
import Nav from './components/nav/nav'
import About from './components/about/about'
import Projects from './components/projects/projects'
//import FunFacts from './components/fun/fun';
import Footer from './components/footer/footer'

import './App.css';


function App() {
  return (
    <div>
      <Header/>
      <Nav/>
      <About />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
