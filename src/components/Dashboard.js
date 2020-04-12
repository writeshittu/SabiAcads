import React from "react";
import DashNav from './dashbar';
import FileInput from "./fileinput"
import { withRouter } from "react-router-dom";



class Dashboard extends React.Component{
    constructor(props) {
        super(props);
       let isStudent = undefined;

   }
       componentDidMount(){
           if (this.props.location.state == undefined || this.props.location.state.loginSuccessful != 'loginmarked') {
               this.props.history.replace('/');
               return;
           }
          console.log(this.props.location.state.loginSuccessful);
          console.log(this.props.location.state.isStudent);
          this.isStudent = this.props.location.state.isStudent; 
       }

    render(){
        return(
            <div>
            {!this.props.location.state.isStudent && <div>
                <DashNav />
                <div  className="row pa4 ma4">

                    <div className="col-sm-4">
    
                    <FileInput/>
                    </div>
                </div>
            </div>}

            {this.props.location.state.isStudent && <div>
                <DashNav />
                <div  className="row pa4 ma4">
                    This is student page
                </div>
            </div>}

            </div>
        );
    }

}

export default withRouter(Dashboard);