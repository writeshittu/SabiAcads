import React from "react";
import FileInput from "./fileinput"



class Dashboard extends React.Component{

    render(){
        return(
            <div  className="row pa4 ma4">
                <div className="col-sm-4 mh3" >
                    
                    <FileInput/>
                </div>
            </div>
        );
    }

}

export default Dashboard;