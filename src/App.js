import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./Navbar/NavBar";
import { Banner } from "./Banner/Banner";
import { Skills } from "./Skills/Skills";
import { Projects } from "./Projects/Projects";
import { Footer } from "./Footer/Footer";
import { Profiles } from './Profiles/Profiles';
import { Contact } from './Contact/Contact';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Profiles />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
