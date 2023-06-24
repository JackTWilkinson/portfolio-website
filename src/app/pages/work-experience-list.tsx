import WorkExperienceItem, { WorkExperienceProps } from "../components/work-experience";
import workExperiences from "../json/work-experiences.json";

export type WorkExperienceListProps = {}

const WorkExperienceList: React.FunctionComponent<WorkExperienceListProps> = () => {
  const convertedList = workExperiences as WorkExperienceProps[];
  const experienceArray = Array.from(convertedList);

  return(
        <>  
          <div className="flex items-center justify-center">
            <p className="text-5xl">Work Experiences</p>
          </div>
          <div className="grid py-3 grid-cols-2 gap-4 h-48">
            <div>
              {
                experienceArray.map((experience: WorkExperienceProps, key) => {
                  return (
                    <div key={key}>
                      <WorkExperienceItem {...experience} />
                    </div>
                  )
                })
              }
            </div>
          </div>
        </>
    )
  }
  
  export default WorkExperienceList