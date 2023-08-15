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
      <div className='font-roboto [&>*]:flex [&>*]:justify-center'>
        <div className='text-m md:text-xl font-medium'>
          { props.title } - { props.degree }
        </div> 
        <br/>
        <div className='text-[16px] sm:text-[18px] [&>div]:flex [&>div]:flex-row'> 
          <div>
            <p className='font-bold'> Dates Attended: </p>
            {
              props.dates_attended.map((date, index) => (
                  <div className='px-2' key={index}>
                    <p> { date } </p>
                  </div>
              ))
            }
          </div>
          <div>
            <p className='font-bold px-3'> GPA: </p>
            <p>{ props.gpa == 0 ? 'Not Applicable' : props.gpa } </p>
          </div>
          <div className='ml-auto pr-5'>
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