import React from "react";


let backgroundStyle = {
    backgroundImage : "url(https://res.cloudinary.com/undercover/image/upload/v1586189926/VGG-Udemy_clone/udemy_clone_t2xg5v.jpg)",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    height:"400px",
    backgroundSize: "cover"
}

    const Searchbox = ({searchfield, searchChange}) =>{

        return(
            <div style={backgroundStyle} >
                <div className="container-fluid">
                <div className ='row'>
                    <div className ='ccol col-sm-3 mt5 offset-2 tc bg-white' >
                    <h3  className ="ma3"> Let’s start something</h3>
                    <p>Begin a plan to meet your 2020 goals with our courses</p>
                    <input className = 'pa3 w-60-m bg-light-gray' type="search" 
                    placeholder= 'search here'
                    onChange ={searchChange}
                    />
                    <button  className ='pa3 mb3'><i className="fa fa-search fa-search"></i></button>
                    </div>
                </div>
                </div>
            </div>
        );
    }

export default  Searchbox;