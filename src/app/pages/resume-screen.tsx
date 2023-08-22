"use client"
import { useEffect, useRef } from "react"
import Image from "next/image"

export type ResumeScreenProps = {}

const ResumeScreen: React.FunctionComponent<ResumeScreenProps> = () => {
  
    return(
            <div className='mx-3 sm:w-3/4 sm:mx-auto'>  
                <div className='flex justify-center pb-10'>
                  <p className='font-spartan text-4xl sm:text-5xl'>Resume</p>
                </div>
                <div className='pl-3 bg-black border-8 border-blue-950 rounded-box flex flex-col'>
                    <a
                        href="/public/static/resume.pdf"
                        rel='noopener noreferrer'
                        target='_blank'
                        title="Jack Wilkinson's Resume"
                    >
                        <div className='font-spartan'>
                            <h1>Click to View or Download my resume</h1>
                            <h3>Last Updated 8/20/2023</h3>
                        </div>
                        <div>
                            <Image 
                                src=''
                                alt='Download my resume here!'
                            />
                        </div>
                    </a>
                </div>
            </div>
    )
  }
  
  export default ResumeScreen