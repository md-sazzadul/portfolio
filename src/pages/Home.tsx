import Navbar from '../components/Navbar';
import MainLayout from '../layouts/MainLayout';
import About from '../sections/About';
import Hero from '../sections/Hero';
import Projects from '../sections/Projects';
import Skills from '../sections/Skills';

const Home = () => {
  return (
    <>
      <Navbar />

      <MainLayout>
        <Hero />
        <About />
        <Skills />
        <Projects />
      </MainLayout>
    </>
  );
};

export default Home;
