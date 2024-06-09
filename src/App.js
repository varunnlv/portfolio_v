import './App.scss';
import Navbar from './components/navbar/Navbar';
import Hero from './components/Hero/Hero';
import Contact from './components/contact/contact';
import Portfolio from './components/portfolio/portfolio';
// import Moon1 from './components/Moon/Moon1';
import Parallax from './components/parallax/parallax';
import Services from './components/services/services';
import Resume from './components/Resume/Resume';

function App() {
  return (
    <div className="App">
      <section id='Homepage'>
        <Navbar />
        <Hero />
      </section>
      <section id='Skills'><Services /></section>
      <section id='Resume'><Resume /></section>
      {/* <section id='Projects'><Technoloiongies /></section> */}
      <Parallax />

      {/* <Moon1 /> */}
      <Portfolio />

      {/* <Education /> */}
      {/* <section id='Qualifications'>Education & Qualifications</section> */}
      <section id='Contact'><Contact /></section>
    </div>
  );
}

export default App;

