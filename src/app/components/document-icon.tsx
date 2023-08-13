export type DocumentIconProps = {
    className: string;
    width: number;
    height: number;
};

const DocumentIcon: React.FC<DocumentIconProps> = (props: DocumentIconProps) => {
    return (
        <svg 
           className={props.className} width={props.width + "px"} height={props.height + "px"} viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"
        >
            <path fill="#ffffff" d="M832 384H576V128H192v768h640V384zm-26.496-64L640 154.496V320h165.504zM160 64h480l256 256v608a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32zm160 448h384v64H320v-64zm0-192h160v64H320v-64zm0 384h384v64H320v-64z"/>
        </svg>
        // <svg 
        //     className={props.className} fill="#ffffff" height={props.height + "px"} width={props.width + "px"} version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="-143 145 512 512"
        // >
        //     <g>
        //         <path d="M-143,145v512h512V145H-143z M339,627h-452V175h452V627z"/>
        //         <rect x="-8.5" y="348.4" width="49.9" height="159.7"/>
        //         <path d="M127.9,508.1v-86.3c0-4.9-0.2-9.7,1.2-13.1c3.8-9.6,12.1-19.6,27-19.6c19.5,0,28.3,14.8,28.3,36.4v82.6H241v-88.8
        //             c0-49.4-27.8-72.4-63.3-72.4c-28.6,0-46.5,15.6-49.8,26.6v-25.1H71.8c0.7,13.3,0,159.7,0,159.7H127.9z"/>
        //         <path d="M14.7,328.4h0.4c18.8,0,30.5-12.3,30.4-27.7C45.1,284.9,33.8,273,15.4,273c-18.4,0-30.5,11.9-30.5,27.7
        //             C-15.1,316.2-3.4,328.4,14.7,328.4z"/>
        //     </g>
        // </svg> TODO fix reactive button on document icon
        // TODO restructure svgs to inherit a custom svg type, the props are reused across all
    );
  };
  
  export default DocumentIcon;