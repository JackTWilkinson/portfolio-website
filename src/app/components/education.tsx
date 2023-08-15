export type EducationProps = {
    title: string;
    degree: string;
    gpa: number;
    description: string;
    link: string;
    dates_attended: Array<string>;
    logo: string;
};

const EducationItem: React.FC<EducationProps> = (props: EducationProps) => {
  // TODO regular support
  // TODO mobile support
    return (
      <div className='font-roboto [&>*]:sm:flex [&>*]:sm:justify-center'>
        <div className='text-m md:text-xl font-medium'>
          { props.title } - { props.degree }
        </div> 
        <br/>
        <div className='text-[16px] sm:text-[18px] [&>div]:flex [&>div]:sm:flex-row'> 
          <div>
            <p className='font-bold'> Dates Attended: </p>
            {/* TODO put in a row */}
            <div>
              {
                props.dates_attended.map((date, index) => (
                  <p className='px-2' key={index}> { date } </p>
                ))
              }
            </div>
          </div>
          <div>
            <p className='font-bold px-0 sm:px-3'> GPA: </p>
            <p>{ props.gpa == 0 ? 'Not Applicable' : props.gpa } </p>
          </div>
          <div className='flex justify-center py-6 sm:py-0 sm:ml-auto sm:pr-5'>
            <a 
              role="button" 
              target="_blank" 
              href={ props.link } 
              className='btn btn-wide btn-accent'
            >
              { props.title } homepage
            </a>
          </div>
        </div>
      </div>
    );
}

export default EducationItem;