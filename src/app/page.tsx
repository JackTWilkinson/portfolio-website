import Navbar from './components/navbar';
import Title from './pages/title';
import About from './pages/about';
import WorkExperienceList from './pages/work-experience-list';
import EducationList from './pages/education-list';
import ResumeButton from './components/resume-button';

export type IndexProps = {}

const Index: React.FunctionComponent<IndexProps> = () => {

  return(
    <>
      <header>
        <Navbar />
      </header>
      <body>
        <section id='title'>
          <Title />
        </section>
        <section className='page-component' id='about'>
          <About />
        </section>
        <section className='page-component' id='work-experience'>
          <WorkExperienceList />
        </section>
        <section className='page-component' id='education'>
          <EducationList />
        </section>
        <ResumeButton />
      </body>
    </>
  )
}

export default Index