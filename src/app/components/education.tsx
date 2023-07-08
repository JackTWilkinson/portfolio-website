export type EducationProps = {
    title: string;
    description: string;
    dates_attended: Array<string>;
};

const EducationItem: React.FC<EducationProps> = (props: EducationProps) => {
    return (
        <>
            <div className='bg-orange-600'>
              <div className='text-xl font-medium'>
                { props.title }
              </div> 
              <div> 
                { props.description }
                <br/>
                <div className='flex flex-row'>
                  <p className='font-bold'> Dates Attended: </p>
                  {
                    props.dates_attended.map((date, index) => (
                        <div className='px-2' key={index}>
                          <p> { date} </p>
                        </div>
                    ))
                  }
                </div>
              </div>
              <div>
                <p>Adding transcripts/links to the university??</p>
              </div>
            </div>
        </>
    );
}

export default EducationItem;