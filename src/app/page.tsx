import Navbar from './components/navbar';
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
      <body>
        <section id="title">
          <Title />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="work-experience">
          <WorkExperience />
        </section>
        <section>
          {/* <Projects /> */}
        </section>
      </body>
    </>
  )
}

export default index