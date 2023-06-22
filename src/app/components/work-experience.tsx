export type WorkExperienceProps = {
    title: string;
    description: string;
    tools: Array<string>;
    dates_worked: Array<string>;
};

const WorkExperienceItem: React.FC<WorkExperienceProps> = (props: WorkExperienceProps) => {
    return (
        <>
            <div className="collapse w-96 bg-orange-600 border-black rounded-box border-base-300 collapse-arrow">
              <input type="checkbox"/> 
              <div className="collapse-title text-xl font-medium">
                { props.title }
              </div> 
              <div className="collapse-content"> 
                <p>
                  { props.description }
                  <br/>
                  <div className="flex flex-row">
                    {
                      props.tools.map((tool, index) => (
                          <div className="px-1" key={index}>
                            <span className="badge badge-outline"> {tool} </span>
                          </div>
                      ))
                    }
                  </div>
                  <div>
                    {
                      props.dates_worked.map((date, index) => (
                          <div key={index}>
                            <p> {date} </p>
                          </div>
                      ))
                    }
                  </div>
                </p>
              </div>
            </div>
        </>
    );
}
export default WorkExperienceItem