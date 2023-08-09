import DocumentIcon from './document-icon';

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
                    <DocumentIcon 
                        className='smart-hover-svg'
                        width={40}
                        height={40}
                    />
                </a>
            </div>
        </div>
    );
}

export default ResumeButton;