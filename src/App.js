import './App.css';
import MainPageSection from './components/mainPageSection';
import Card from './components/smallCard';
import About from './components/about';
import Work from './components/work';
import { Test } from './components/testComponent';

function App() {
  return (
    <>
      <MainPageSection/>
      {/* // <Card /> */}
      <About/>
      <Work />
      <Test style = {{width: '300px',backgroundColor: "yellow"}}/>
    </>
  );
}

export default App;
