import DocumentIcon from "./svg/document-icon";

export type ResumeProps = {}

const ResumeButton: React.FC<ResumeProps> = (props: ResumeProps) => {
    return (
        <div 
        className='position: fixed bottom-3 sm:bottom-3 right-3 sm:right-3 cursor-pointer tooltip tooltip-left m-1' 
        data-tip='Download a pdf copy of my resume here!'>
            <a 
                href='/static/resume.pdf'
                role='button' 
                target="_blank"
                rel="noopener noreferrer"
                download
                className='btn btn-neutral'
            >
                <DocumentIcon 
                    className='smart-hover-svg'
                    width={40}
                    height={40}
                />
                Resume
            </a>
        </div>
    );
}

export default ResumeButton;