import educationList from '../json/education.json';
import EducationItem, { EducationProps } from '../components/education';

export type EducationListProps = {}

const EducationList: React.FunctionComponent<EducationListProps> = () => {
  const convertedList = educationList as EducationProps[];
  const educationArray = Array.from(convertedList);
  
  return(
        <div className='w-3/4 mx-auto'>  
          <div>
            <div className='flex justify-center pb-10'>
              <p className='text-5xl'>Education</p>
            </div>
            <div className='pl-3 bg-orange-600 border-8 border-black rounded-box'>
              {
                educationArray.map((educationItem: EducationProps, key) => {
                  return (
                    <div className='py-4' key={key}>
                      <EducationItem {...educationItem} />
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
    )
  }
  
  export default EducationList