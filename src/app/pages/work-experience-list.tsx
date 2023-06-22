import WorkExperienceItem, { WorkExperienceProps } from "../components/work-experience";
import workExperiences from "../json/work-experiences.json";
import { ReactNode } from "react";

export type WorkExperienceListProps = {}

const WorkExperienceList: React.FunctionComponent<WorkExperienceListProps> = () => {
  const convertedList = workExperiences as WorkExperienceProps[];
  
  return(
        <>  
          <div className="flex items-center justify-center">
            <p className="text-2xl">Work Experiences</p>
          </div>
          <div className="grid py-3 grid-cols-2 gap-4 h-48">
            <div>
              <WorkExperienceItem {...convertedList[0]} />
              {/* {
                convertedList.map((experience: WorkExperienceProps, key) => {
                  <li key={key}>
                    <WorkExperienceItem {...experience} />
                  </li>
                })
              } */}
            </div>
          </div>
        </>
    )
  }
  
  export default WorkExperienceList