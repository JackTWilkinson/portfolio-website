import educationList from '../json/education.json';
import EducationItem, { EducationProps } from '../components/education';

export type EducationListProps = {}

const EducationList: React.FunctionComponent<EducationListProps> = () => {
  const convertedList = educationList as EducationProps[];
  const educationArray = Array.from(convertedList);
  
  return(
        <>  
          <div className='flex justify-center pb-10'>
            <p className='text-5xl'>Education</p>
          </div>
          <div>
            {
              educationArray.map((educationItem: EducationProps, key) => {
                return (
                  <div className='flex justify-center py-4' key={key}>
                    <EducationItem {...educationItem} />
                  </div>
                )
              })
            }
          </div>
        </>
    )
  }
  
  export default EducationList