export type WorkExperienceProps = {
    title: string;
    description: string;
    tools: Array<string>;
    dates_worked: Array<string>;
};

const WorkExperienceItem: React.FC<WorkExperienceProps> = (props: WorkExperienceProps) => {
    return (
        <>
            <div className='collapse w-3/4 border-8 bg-orange-600 border-black rounded-box collapse-arrow'>
              <input type='checkbox'/> 
              <div className='collapse-title text-xl font-medium'>
                { props.title }
              </div> 
              <div className='collapse-content'> 
                { props.description }
                <br/>
                <div className='flex flex-row'>
                  <p>Tools Utilized: </p>
                  {
                    props.tools.map((tool, index) => (
                        <div className='px-1' key={index}>
                          <span className='badge badge-outline'> {tool} </span>
                        </div>
                    ))
                  }
                </div>
                <div className='flex flex-row'>
                  {
                    props.dates_worked.map((date, index) => (
                        <div className='pr-2' key={index}>
                          <p> { date} </p>
                        </div>
                    ))
                  }
                </div>
              </div>
            </div>
        </>
    );
}

export default WorkExperienceItem