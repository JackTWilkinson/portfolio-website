export type TitleProps = {};
import Image from 'next/image';
import GithubLogo from '../../../public/static/github.png';

const Title: React.FunctionComponent<TitleProps> = () => {

    return(
        <>
            <div className="flex items-center justify-center">
                <div>
                    <p className="text-5xl">Jack Wilkinson</p>
                </div>
                <div>
                    <a rel="noopener noreferrer" href="https://github.com/JackTWilkinson" target="_blank">
                        <Image 
                            src={require('/public/static/github.png')}
                            width={40} 
                            height={40} 
                            alt='Link to my Github profile'
                        />
                    </a>
                </div>
                <div>
                    <a href="../../../public/resume.pdf" download>
                        <Image 
                            src={require('/public/static/document.png')}
                            width={40}
                            height={40}
                            alt='A download link for my current Resume'
                        />
                    </a>
                </div>
            </div>
        </>
    )
  }
  
  export default Title