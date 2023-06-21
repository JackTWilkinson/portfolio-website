export interface WorkExperienceProps {
    title: string;
    description: string;
    languages: Array<string>;
}

const workExperience: React.FC<WorkExperienceProps> = (title, description, languages) => {
    return (
        <>
            <div className="collapse w-96 border rounded-box border-base-300 collapse-arrow">
              <input type="checkbox"/> 
              <div className="collapse-title text-xl font-medium">
                { title }
              </div> 
              <div className="collapse-content"> 
                <p>
                  { description }
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
export default workExperience