const WorkExperience = () => {

    return(
        <>  
          <h1> Software Engineer @ Principal Financial</h1>
          <div className="collapse w-96 border rounded-box border-base-300 collapse-arrow">
            <input type="checkbox"/> 
            <div className="collapse-title text-xl font-medium">
              Software Engineer @ Principal Financial
            </div> 
            <div className="collapse-content"> 
              <p>
                I have been working at principal for a year now and use the following 
                <span className="badge badge-outline">Salesforce</span>
                <span className="badge badge-outline">Java</span>
                <span className="badge badge-outline">React</span>
              </p>
            </div>
          </div>
        </>
    )
  }
  
  export default WorkExperience