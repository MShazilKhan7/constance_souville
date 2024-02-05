// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.min.js';
import './App.css'; 
import MainPageSection from './components/mainPageSection';
import Card from './components/smallCard';
import About from './components/about';
import Work from './components/work';
import { ProjectCard } from './components/projectCard';
import ProjectSection from './components/projectsection';
import CursorFollower from './components/mousefollower';
import { Socials } from './components/socialsSection';

function App() {
  return (
    <>
    <div>
        {/* < CursorFollower /> */}
        <MainPageSection/>
        {/* // <Card /> */}
        <About/> 
        <Work />
        <ProjectSection />
        <Socials/>
      </div>
    </>
  );
}


export default App;
