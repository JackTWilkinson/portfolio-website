import Navbar from './components/navbar';
import Title from './pages/title';
import About from './pages/about';
import WorkExperienceList from './pages/work-experience-list';
import EducationList from './pages/education-list';
import ResumeButton from './components/resume-button';
import NavButton from './components/nav-button';
import ResumeScreen from './pages/resume-screen';

export type IndexProps = {}

const Index: React.FunctionComponent<IndexProps> = () => {

  return(
    <>
      <header >
        <div className='invisible lg:visible'>
          <Navbar />
        </div>
        <div className='lg:invisible visible'>
          <NavButton />
        </div>
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
        <section className='page-component lg:visible invisible' id='resume-screen'>
          <ResumeScreen />
        </section>
        <div className='visible lg:invisible'>
          <ResumeButton />
        </div>
      </body>
    </>
  )
}

export default Index