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
      <div className='font-roboto'>
        <div className='flex justify-center text-xl font-medium'>
          { props.title } - { props.degree }
        </div> 
        <br/>
        <div> 
          <div className='flex flex-row'>
            <p className='font-bold'> Dates Attended: </p>
            {
              props.dates_attended.map((date, index) => (
                  <div className='px-2' key={index}>
                    <p> { date } </p>
                  </div>
              ))
            }
          </div>
          <div className='flex flex-row'>
            <p className='font-bold px-3'> GPA: </p>
            <p>{ props.gpa == 0 ? 'Not Applicable' : props.gpa } </p>
          </div>
        </div>
        <div className='flex justify-center pt-5'>
          <a role="button" target="_blank" href={ props.link } className='btn btn-wide'>{ props.title } homepage</a>
        </div>
      </div>
    );
}

export default EducationItem;