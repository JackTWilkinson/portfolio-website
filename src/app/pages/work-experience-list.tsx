import WorkExperienceItem, { WorkExperienceProps } from '../components/work-experience';
import workExperiences from '../json/work-experiences.json';

export type WorkExperienceListProps = {}

const WorkExperienceList: React.FunctionComponent<WorkExperienceListProps> = () => {
  const convertedList = workExperiences as WorkExperienceProps[];
  const experienceArray = Array.from(convertedList);

  return(
        <div className='mx-3 sm:mx-auto'>  
          <div className='flex justify-center pb-10'>
            <p className='font-spartan text-4xl sm:text-5xl'>Work Experiences</p>
          </div>
          <div>
            {
              experienceArray.map((experience: WorkExperienceProps, index) => {
                return (
                  <div className='flex justify-center py-4' key={index}>
                    <WorkExperienceItem {...experience} />
                  </div>
                )
              })
            }
          </div>
        </div>
    )
  }
  
  export default WorkExperienceList