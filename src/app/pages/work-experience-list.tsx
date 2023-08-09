import WorkExperienceItem, { WorkExperienceProps } from '../components/work-experience';
import workExperiences from '../json/work-experiences.json';

export type WorkExperienceListProps = {}

const WorkExperienceList: React.FunctionComponent<WorkExperienceListProps> = () => {
  const convertedList = workExperiences as WorkExperienceProps[];
  const experienceArray = Array.from(convertedList);

  return(
        <div>  
          <div className='flex justify-center pb-10'>
            <p className='font-spartan text-5xl'>Work Experiences</p>
          </div>
          <div>
            {
              experienceArray.map((experience: WorkExperienceProps, key) => {
                return (
                  <div className='flex justify-center py-4' key={key}>
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