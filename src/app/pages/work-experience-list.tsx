import WorkExperienceItem from "../components/work-experience";

export type WorkExperienceListProps = {

}

const WorkExperienceList: React.FunctionComponent<WorkExperienceListProps> = () => {

  function populateWorkExperienceList() {
    const temp = {
      title: 'test company',
      description: 'Here is the place that I worked',
      languages: [
        'one',
        'two',
      ]
    };

    return <WorkExperienceItem {...temp} />;
  }
    
  return(
        <>  
          <h1>Work Experience</h1>
          <div>
            {
              populateWorkExperienceList()
            }
          </div>
        </>
    )
  }
  
  export default WorkExperienceList