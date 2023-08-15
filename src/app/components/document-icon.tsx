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
        // TODO restructure svgs to inherit a custom svg type, the props are reused across all
    );
  };
  
  export default DocumentIcon;