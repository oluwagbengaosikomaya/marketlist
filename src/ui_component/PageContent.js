
import "./pagecontent.css"; //external styling
import pict from "../state.jpg"

const PageContent = ({students})=>{
    console.log(students)

    return (

        <div className="row content">
            <div className="col">
                <h1 className="text-center">PageContent</h1>
            <div className="row">

            <div className="col-md-6">
            <p>image located inside src folder</p>
            <img src={pict} className="img-fluid" alt="an"/>

            </div>

            <div className="col-md-6">
            <p>image located inside public folder</p>
            <img src="/capital.jpg" className="img-fluid" alt="capi"/>

            </div>

            </div>

            <div className="row">

            {

                students.map((student, index)=>{
                    return(
                        <div className="col-md-3 p-3 bg-primary">
                            <p>{student}</p>
                        </div>
                    )

                })
            }


            </div>

            </div>
        </div>
    )


}

export default PageContent;