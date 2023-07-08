export type AboutProps = {};

const About: React.FunctionComponent<AboutProps> = () => {

    return(
        <div className='flex flex-col mx-10'>
            <div className='flex justify-center pb-10'>
                <p className='text-5xl'>My Expertise</p>
            </div>
            <div className='grid grid-cols-3 gap-4'>
                <div className='flex flex-col'>
                    <p className='text-2xl flex justify-center'>Software Development</p>
                    <p>
                        Experienced in OOP: acted as a TA for Object-Oriented Programming at Iowa State University, 
                        and have utilized functional and OOP in professional development environments.
                    </p>
                </div>
                <div className='flex flex-col'>
                    <p className='text-2xl flex justify-center'>
                        Frontend & Fullstack Developement
                    </p>
                    <p>
                        Professional experience in a frontend and fullstack development environments utilizing: 
                        Next.js and Node.js and Salesforce frameworks. Adept at working in agile environments 
                        in a variety of capacities order to deliver high quality code that is used by a wide variety of end users.
                    </p>
                </div>
                <div className='flex flex-col'>
                    <p className='text-2xl flex justify-center'>
                        Language List/skills
                    </p>
                    <p>
                        Experience developing with: JavaScript, Java, C++, Python, REACT, PHP, Nodejs, Graphql,
                        and Android Studio. Experience working in Agile teams and a variety of distinct team 
                        environments including a variety of performing arts and sports teams throughout college and high school.
                    </p>
                </div>
            </div>
        </div>
    )
  }
  
  export default About