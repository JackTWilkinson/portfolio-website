import Image from 'next/image';

export type ProjectListProps = {}

const ProjectList: React.FunctionComponent<ProjectListProps> = () => {
  
  return(
        <div className='w-3/4 mx-auto'>  
          <div className='flex justify-center pb-10'>
            <p className='text-5xl'>Projects</p>
          </div>
          {/* <div class="badge badge-secondary">Add for a cool highlight!</div> */}
          <div className='list'>
            {
              // projectArray.map((projectItem: ProjectListProps, key) => {
              //   return (
              //     <div className='py-4' key={key}>
                        // <div className='card w-96 bg-base-100 shadow-xl'>
                        //   <figure>
                        //     <Image src='' alt='Card with project pic' />
                        //   </figure>
                        //   <div className='card-body'>
                        //     <h2 className='card-title'>PROJECT!</h2>
                        //     <p>A brief description of the project</p>
                        //     <div className='card-actions justify-end'>
                        //       <button className='btn btn-primary'>Link to project</button>
                        //     </div>
                        //   </div>
                        // </div>
              //     </div>
              //   )
              // })
            }
          </div>
        </div>
    )
  }
  
  export default ProjectList