export type AboutProps = {};

const About: React.FunctionComponent<AboutProps> = () => {

    return(
        <div className='flex flex-col'>
            <div className='flex justify-center pb-10'>
                <p className='text-5xl'>My Expertise</p>
            </div>
            <div className='flex flex-row'>
                <div className='flex flex-col'>
                    <p className='text-2xl'>Software Development</p>
                    <p>
                        Experienced in OOP: acted as a TA for OOP at Iowa State University, 
                        and have utilized functional and OOP in development: Java, Javscript, Typescript,
                        C, Python, and C#.
                    </p>
                    <p>
                        Familiar with fundamental engineering concepts and able to utilize them to 
                        develop software at a high level to many users.
                    </p>
                </div>
                <div className='flex flex-col'>
                    <p className='text-2xl'>
                        Frontend Developement
                        React, Next.js
                    </p>
                    <p>
                        Experience in a frontend and fullstack development environment
                        utilizing both Next.js and Node.js to ship user-facing code on a application
                        that interfaced with many users a day.
                    </p>
                </div>
                <div className='flex flex-col'>
                    <p className='text-2xl'>
                        Language List/skills
                    </p>
                    <p>
                        JavaScript, Ja va, C++, Python, REACT, PHP, Nodejs, Gra phql, a nd Android Studio
                        Experience working in Agile tea ms a nd a  variety of distinct team environments o Active member of several sports 
                        and clubs throughout High School a nd College, including: IEEE (2018), Our Town (2018), Va rsity Show Choir 
                        (2014-2017)
                    </p>
                </div>
            </div>
        </div>
    )
  }
  
  export default About