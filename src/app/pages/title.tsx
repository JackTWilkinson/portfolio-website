export type TitleProps = {};
import Image from 'next/image';

const Title: React.FunctionComponent<TitleProps> = () => {

    return(
        <>
            <div className="flex items-center justify-center">
                <p className="text-5xl">Jack Wilkinson</p>
                <div>
                    {/* <a href="https://github.com/JackTWilkinson" target="_blank"> */}
                        {/* <Image 
                            src='../../../public/github.svg' 
                            width={100} 
                            height={100} 
                            alt='Link to my Github profile'
                        /> */}
                    {/* </a> */}
                    {/* <a href="../../../public/resume.pdf" download>
                        Resume
                        <Image 
                            src='../../../public/document.svg'
                            width={100}
                            height={100}
                            alt='A download link for my current Resume'
                        />
                    </a> */}
                </div>
            </div>
        </>
    )
  }
  
  export default Title