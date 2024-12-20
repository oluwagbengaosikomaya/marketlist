//inline: backgroundColor,paddingLeft, 
//internal
//external


//inline styling. style={{}}
const Header = (props)=>{
    console.log(props.amt)

    return (

        <div className="row">
            <div className="col">

                <h1 className="text-center" style={{color:"black", backgroundColor:"green", minHeight:"20vh"}}>Header</h1>
                <p className="text-center">{props.amt}</p>
                <p className="text-center">Number of element : {props.ccc}</p>

            </div>
        </div>
    )


}

export default Header;