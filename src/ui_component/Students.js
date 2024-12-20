const Students = ({pro})=>{
    console.log(pro)

    return (

        <div className="row">
            <div className="col">
                            <table border="2">
                              <thead>
                              <tr>
                                    <th>S/N</th>
                                    <th>Name</th>
                                    <th>Score</th>

                                </tr>
                              </thead>

                                <tbody>
                                     {
                                            pro.map(function(pr, index){
                                                return(

                                                 <tr key={index}>
                                                    <td>{index ++}</td>
                                                    
                                                    <td>{pr.name}</td>
                                                    
                                                    <td>{pr.score}</td>
            
                                                  </tr>
                                                )



                                            })



                                     }
                                </tbody>


                            </table>
              
            </div>
        </div>
    )


}

export default Students;