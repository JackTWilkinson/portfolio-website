export type TitleProps = {};

const Title: React.FunctionComponent<TitleProps> = () => {

    return(
        <>
            <div className="flex items-center justify-center">
                <p className="text-5xl">Jack Wilkinson</p>
                <div>
                    <a>Github</a>
                    <a>Resume</a>
                </div>
                <button>Down Arrow</button>
            </div>
        </>
    )
  }
  
  export default Title