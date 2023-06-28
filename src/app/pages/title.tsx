export type TitleProps = {};
import Image from 'next/image';
import githubLogo from '../../../public/static/github.png';
import documentLogo from '../../../public/static/document.png';

const Title: React.FunctionComponent<TitleProps> = () => {

    return(
        <div className='flex flex-col'>
            <div className='flex items-center justify-center'>
                <p className='text-5xl'>Jack Wilkinson</p>
            </div>
            <div className='flex flex-row items-center justify-center'>
                <div>
                    <a rel='noopener noreferrer' href='https://github.com/JackTWilkinson' target='_blank'>
                        <Image 
                            src={githubLogo}
                            width={40} 
                            height={40} 
                            alt='Link to my Github profile'
                        />
                    </a>
                </div>
                <div>
                    <a href={'../../../public/resume.pdf'} download='resume'>
                        <Image 
                            src={documentLogo}
                            width={40}
                            height={40}
                            alt='A download link for my current Resume'
                        />
                    </a>
                </div>
            </div>
        </div>
    )
  }
  
  export default Title