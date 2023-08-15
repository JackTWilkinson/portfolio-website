export type WorkExperienceProps = {
    title: string;
    description: string;
    tools: Array<string>;
    dates_worked: Array<string>;
};

const WorkExperienceItem: React.FC<WorkExperienceProps> = (props: WorkExperienceProps) => {
  //TODO mobile support
    return (
      <div tabIndex={0} className='font-roboto text-inherit collapse sm:w-3/4 border-8 bg-black border-blue-950 text-primary-content focus:text-secondary-content:text-inherit rounded-box'>
        <div className='collapse-title text-xl font-medium sm:hover:text-gray-500'>
          { props.title }
        </div> 
        <div className='collapse-content'> 
          { props.description }
          <br/><br/>
          <div className='flex flex-row'>
            <p>Tools Utilized: </p>
            {
              props.tools.map((tool, index) => (
                  <div className='px-1' key={index}>
                    <span className='badge badge-ghost'> {tool} </span>
                  </div>
              ))
            }
          </div>
          <br/>
          <div className='flex flex-row'>
            {
              props.dates_worked.map((date, index) => (
                  <div className='pr-2' key={index}>
                    <p> { date } </p>
                  </div>
              ))
            }
          </div>
        </div>
      </div>
    );
}

export default WorkExperienceItem