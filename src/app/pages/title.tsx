export type TitleProps = {};
import Image from 'next/image';
import githubLogo from '../../../public/static/github.png';
import linkedinLogo from '../../../public/static/linkedin.png';

const Title: React.FunctionComponent<TitleProps> = () => {

    return(
        <div className='flex h-full justify-center items-center flex-col'>
            <div className='pb-4'>
                <p className='text-5xl'>Jack Wilkinson</p>
            </div>
            <div className='flex flex-row'>
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
                    <a rel='noopener noreferrer' href='https://www.linkedin.com/in/jack-wilkinson-19491114b/' target='_blank'>
                        <Image 
                            src={linkedinLogo}
                            width={40} 
                            height={40} 
                            alt='Link to my Linkedin profile'
                        />
                    </a>
                </div>
            </div>
        </div>
    )
  }
  
  export default Title