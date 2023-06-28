export type AboutProps = {};

const About: React.FunctionComponent<AboutProps> = () => {

    return(
        <>
            <div className="flex items-center justify-center">
                <div>
                    <p className="text-5xl">My Expertise</p>
                </div>
                <div>
                    <div>
                        <p className="text-2xl">Software Development</p>
                    </div>
                    <div>
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
                </div>
                <div>
                    <div>
                        <p className="text-2xl">
                            Frontend Developement
                            React, Next.js
                        </p>
                    </div>
                    <div>
                        <p>
                            Experience in a frontend and fullstack development environment
                            utilizing both Next.js and Node.js to ship user-facing code on a application
                            that interfaced with many users a day.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
  }
  
  export default About