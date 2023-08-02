import Image from 'next/image';

export type ResumeProps = {}

const ResumeButton: React.FC<ResumeProps> = (props: ResumeProps) => {
        
    return (
        <div className='position: fixed bottom-8 right-8 border-8 border-indigo-900 rounded-full  bg-black cursor-pointer'>
            <div className='tooltip tooltip-left m-2' data-tip='Download a pdf copy of my resume here!'> 
            <a
                href='/static/resume.pdf'
                target="_blank"
                rel="noopener noreferrer"
                download
            >
                    <Image 
                        src='/static/document.svg'
                        width={40}
                        height={40}
                        alt='A download link for my current Resume'
                    />
                </a>
            </div>
        </div>
    );
}

export default ResumeButton;