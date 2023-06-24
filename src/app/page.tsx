import Navbar from './components/navbar';
import Title from './pages/title';
import About from './pages/about';
import WorkExperienceList from './pages/work-experience-list';

export type IndexProps = {}

const Index: React.FunctionComponent<IndexProps> = () => {

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
          <WorkExperienceList />
        </section>
        {/* <section>
          <Projects />
        </section> */}
      </body>
    </>
  )
}

export default Index