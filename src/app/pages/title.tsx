export type TitleProps = {};
import Image from 'next/image';
import GitIcon from '../components/git-icon';
import LinkedinIcon from '../components/linkedin-icon';
import { League_Spartan, Roboto_Mono } from 'next/font/google';

const titleFont1 = League_Spartan({
    weight: '900',
    subsets: ['latin']
});

const titleFont2 = Roboto_Mono({
    weight: '700',
    subsets: ['latin']
});

const Title: React.FunctionComponent<TitleProps> = () => {

    return(
        <div className='flex h-full justify-center items-center flex-col'>
            <div className='pb-4'>
                <p className={titleFont1.className}>Jack Wilkinson</p>
                <p className={titleFont2.className}>Jack Wilkinson</p>
            </div>
            <div className='pb-4'>
                <Image 
                    className='mask mask-hexagon-2'
                    src='/static/Jack.png'
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