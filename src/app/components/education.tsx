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
      <div>
        <div className='flex justify-center text-xl font-medium'>
          { props.title } - { props.degree }
        </div> 
        <div> 
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
            <div className=''>
              {/* Justify right somehow*/}
              <p> GPA {props.gpa} </p>
            </div>
          </div>
        </div>
        <div>
            <Link className='smart-hover-text' href={props.link}>University homepage</Link>
            <Image 
                src={props.logo}
                width={50}
                height={50}
                alt={props.title}
            />
        </div>
      </div>
    );
}

export default EducationItem;