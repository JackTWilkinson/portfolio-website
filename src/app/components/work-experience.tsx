export type WorkExperienceProps = {
    title: string;
    description: string;
    languages: Array<string>;
};

const WorkExperienceItem: React.FC<WorkExperienceProps> = (props: WorkExperienceProps) => {
    return (
        <>
            <div className="collapse w-96 border rounded-box border-base-300 collapse-arrow">
              <input type="checkbox"/> 
              <div className="collapse-title text-xl font-medium">
                { props.title }
              </div> 
              <div className="collapse-content"> 
                <p>
                  { props.description }
                  <br/>
                  {
                    // languages.map((language) => (
                    //     <span className="badge badge-outline"> {language} </span>
                    // ))
                  }
                </p>
              </div>
            </div>
        </>
    );
}
export default WorkExperienceItem