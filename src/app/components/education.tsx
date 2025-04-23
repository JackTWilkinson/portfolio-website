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
    return (
      <div className='font-roboto m-auto'>
        <div className='text-m md:text-xl font-medium flex justify-center'>
          { props.title } - { props.degree }
        </div> 
        <br/>
        <div className='text-[16px] sm:text-[18px] flex flex-col sm:flex-row justify-center'> 
          <div className='flex flex-row'>
            <p className='font-bold'> Dates Attended: </p>
            <div>
              {
                props.dates_attended.map((date, index) => (
                  <p className='px-0 m-auto sm:px-2' key={index}> { date } </p>
                ))
              }
            </div>
          </div>
          <div className='flex flex-row'>
            <p className='font-bold px-0 sm:px-3'> GPA: </p>
            <p>{ props.gpa == 0 ? 'Not Applicable' : props.gpa } </p>
          </div>
        </div>
          <div className='flex justify-center py-6 sm:pt-6'>
            <a 
              role="button" 
              target="_blank" 
              href={ props.link } 
              className='btn btn-sml btn-accent'
            >
              { props.title }
            </a>
          </div>
      </div>
    );
}

export default EducationItem;