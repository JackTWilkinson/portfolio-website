export type AboutProps = {};

const About: React.FunctionComponent<AboutProps> = () => {
    return(
        <div className='flex flex-col mx-3 sm:mx-10'>
            <div className='flex justify-center pb-10'>
                <p className='font-spartan text-4xl sm:text-5xl'>My Expertise</p>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
                <div className='flex flex-col bg-black border-8 border-blue-950 rounded-box p-10'>
                    <p className='font-spartan text-xl sm:text-2xl flex justify-center'>Software Development</p>
                    <hr />
                    <p className='font-roboto text-[16px] sm:text-[18px]'>
                        Experienced in Object-Oriented Programming in a variety of frameworks including:
                        Javascript, Java, C++, REACT, NEXT.js, PHP, Python and Android Studio. Able to apply existing
                        understanding of foundational software development concepts to new frameworks quickly and 
                        effectively.
                    </p>
                </div>
                <div className='flex flex-col bg-black border-8 border-blue-950 rounded-box p-10'>
                    <p className='font-spartan text-xl sm:text-2xl flex justify-center'>
                        Fullstack Developement
                    </p>
                    <hr />
                    <p className='font-roboto text-[16px] sm:text-[18px]'>
                        Professional experience in a frontend and fullstack development environments utilizing: 
                        Next.js, React, and Salesforce frameworks. Responsible for achieving code quality through code coverage
                        and the utilization of Test-Driven-Development. 
                    </p>
                </div>
                <div className='flex flex-col bg-black border-8 border-blue-950 rounded-box p-10'>
                    <p className='font-spartan text-xl sm:text-2xl flex justify-center'>
                        Skills
                    </p>
                    <hr className='bg-black' />
                    <p className='font-roboto text-[16px] sm:text-[18px]'>
                        Experience working in Agile teams responsible for the production and maintenance of high-quality code through
                        testing and pair-programming. Public speaking and presentation experience utilized to communicate ideas to 
                        stakeholders and peers in a variety of settings.
                    </p>
                </div>
            </div>
        </div>
    )
  }
  
  export default About