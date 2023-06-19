import './styles/global.css';
import Navbar from './components/Navbar';
import Title from './pages/title';
import About from './pages/about';
import WorkExperience from './pages/work-experience';

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
        <section id="work-experience">
          <WorkExperience />
        </section>
      </div>
      {/* <Projects /> */}
    </>
  )
}

export default index