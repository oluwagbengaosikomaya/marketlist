

const Navbar = ({xyz, ddd})=>{
    
    //console.log(props.xyz)
    //internal styling

    const styleH1 = {
        color: 'green',
        backgroundColor: 'blue',
        paddingTop: '80px',
        minHeight:'10vh'
    }

    return (

        <div className="row">
            <div className="col">

                <h1 className="text-center" style={styleH1}>Navbar</h1>
                <p className="text-center">Total Amount : {xyz}</p>
                <p className="text-center">Number of element: {ddd}</p>
            </div>
        </div>
    )


}

export default Navbar;