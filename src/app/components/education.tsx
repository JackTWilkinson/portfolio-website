import Image from 'next/image';
import Link from 'next/link';

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
            <div className='flex justify-right'>
              {/* TODO Justify right somehow*/}
              <p> GPA {props.gpa} </p>
            </div>
          </div>
        </div>
        <div className=''>
          <button className='btn glass'>{ props.title } homepage</button>
          <Image 
              src={props.logo}
              width={50}
              height={50}
              alt={props.title}
          />
          {/* TODO glass button over banner of set size for the homepage button */}
        </div>
      </div>
    );
}

export default EducationItem;