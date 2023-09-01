export type TitleProps = {};
import Image from 'next/image';
import GitIcon from '../components/svg/git-icon';
import LinkedinIcon from '../components/svg/linkedin-icon';

const Title: React.FunctionComponent<TitleProps> = () => {
// TODO get final review on text
    return(
        <div className='flex h-full justify-center items-center flex-col'>
            <div className='pb-4 pt-20'>
                <h1 className='font-spartan font-bold text-4xl md:text-7xl lg:text-9xl'>Jack Wilkinson</h1>
            </div>
            <div className='pb-4'>
                <Image 
                    className='mask mask-hexagon-2'
                    src='/static/jack-metal.png'
                    width={300} 
                    height={300} 
                    alt='Picture of the dev'
                />
            </div>
            <div className='flex flex-row'>
                <div className='px-3'>
                    <a rel='noopener noreferrer' href='https://github.com/JackTWilkinson' target='_blank'>
                        <GitIcon 
                            className='smart-hover-svg'
                            width={50}
                            height={50}
                        />
                    </a>
                </div>
                <div className='px-3'>
                    <a rel='noopener noreferrer' href='https://www.linkedin.com/in/jack-wilkinson-19491114b/' target='_blank'>
                        <LinkedinIcon 
                            className='smart-hover-svg'
                            height={50}
                            width={50}
                        />
                    </a>
                </div>
            </div>
        </div>
    )
  }
  
  export default Title