export type AboutProps = {};

const About: React.FunctionComponent<AboutProps> = () => {

    return(
        <div className='flex flex-col mx-10'>
            <div className='flex justify-center pb-10'>
                <p className='font-spartan text-5xl'>My Expertise</p>
            </div>
            <div className='grid grid-cols-3 gap-4'>
                <div className='flex flex-col bg-black border-8 border-blue-950 rounded-box p-10'>
                    <p className='font-spartan text-2xl flex justify-center'>Software Development</p>
                    <hr />
                    <p className='font-roboto'>
                        Experienced in OOP: acted as a TA for Object-Oriented Programming at Iowa State University, 
                        and have utilized functional and OOP in professional development environments.
                    </p>
                </div>
                <div className='flex flex-col bg-black border-8 border-blue-950 rounded-box p-10'>
                    <p className='font-spartan text-2xl flex justify-center'>
                        Frontend & Fullstack Developement
                        {/* TODO, needs to center at least */}
                    </p>
                    <hr />
                    <p className='font-roboto'>
                        Professional experience in a frontend and fullstack development environments utilizing: 
                        Next.js and Node.js and Salesforce frameworks. Adept at working in agile environments 
                        in a variety of capacities order to deliver high quality code that is used by a wide variety of end users.
                    </p>
                </div>
                <div className='flex flex-col bg-black border-8 border-blue-950 rounded-box p-10'>
                    <p className='font-spartan text-2xl flex justify-center'>
                        Language List/skills
                    </p>
                    <hr className='bg-black' />
                    <p className='font-roboto'>
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