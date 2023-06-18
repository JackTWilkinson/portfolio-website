import './styles/global.css';
import Navbar from './components/Navbar';
import Title from './pages/title';
import About from './pages/about';

export interface IndexProps {
 
}

const index: React.FunctionComponent<IndexProps> = () => {

  return(
    <>
      <header>
        <Navbar />
      </header>
      <div>
        <section id="title">
          <Title />
        </section>
        <section id="about">
          <About />
        </section>
      </div>
      {/* <WorkExperience /> */}
      {/* <Projects /> */}
    </>
  )
}

export default index