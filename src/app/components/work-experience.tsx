export type WorkExperienceProps = {
    title: string;
    description: string;
    tools: Array<string>;
    dates_worked: Array<string>;
};

const WorkExperienceItem: React.FC<WorkExperienceProps> = (props: WorkExperienceProps) => {
    return (
      <div tabIndex={0} className='font-roboto text-inherit collapse -lg:collapse-open mx-3 sm:mx-10 lg:w-3/4 border-8 bg-black border-blue-950 text-primary-content focus:text-secondary-content:text-inherit rounded-box'>
        <div className='collapse-title text-xl font-medium lg:hover:text-gray-500'>
          { props.title }
        </div> 
        <div className='collapse-content'> 
          <p className='-sm:mr-5'>{ props.description }</p>
          <br/>
          <div className='sm:flex sm:flex-row'>
            <p className='font-bold'>Tools Utilized: </p>
            <div className='sm:flex sm:flex-row -sm:grid -sm:grid-flow-row-dense -sm:grid-flow-col-dense -sm:justify-start'>
              {
                props.tools.map((tool, index) => (
                    <div className='px-1' key={index}>
                      <span className='badge badge-ghost'> {tool} </span>
                    </div>
                ))
              }
            </div>
          </div>
          <br/>
          <div className='flex flex-col md:flex-row'>
            <p className='font-bold'>Dates Employed: </p>
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