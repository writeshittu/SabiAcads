import React from "react";
import DashNav from './dashbar';
import FileInput from "./fileinput"
import Courses from "./course"
import { withRouter } from "react-router-dom";
import axios from 'axios';
import {getCourseLists} from "../service/dashboard-service";


class Dashboard extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            courses : []
        }
       let isStudent = undefined;

   }
       componentDidMount(){
        axios.get(`https://oauth2.googleapis.com/tokeninfo?id_token=${window.localStorage.getItem("token_id")}`)
        .then(res => {
          console.log(res.data)
            if (res.data != undefined && res.data.name != undefined) {
              window.localStorage.setItem('name', res.data.name);
              window.localStorage.setItem('email', res.data.email);
                this.props.history.push({pathname : '/dashboard', state:{loginSuccessful:"loginmarked", isStudent:window.localStorage.getItem('isStudent')}});
            }
        }).catch(err=> {
            console.log(err);
            window.localStorage.removeItem('isStudent');
            window.localStorage.removeItem('token_id');
            window.localStorage.removeItem('name');
            window.localStorage.removeItem('email');
            this.props.history.replace('/');
        });

        getCourseLists(this.updateCourseInState)

       }

       updateCourseInState = (data) => {
           console.log("Received data for courses update");
        console.log(data);

            this.setState({
                courses : data
            });
       }

    render(){
        return(
            <div>
            {window.localStorage.getItem('isStudent') != true && <div>
                <DashNav />
                <div  className="row pa4 ma4">

                    <div className="col-sm-4">
    
                    <FileInput/>
                    </div>
                </div>
            </div>}

            {window.localStorage.getItem('isStudent') == true && <div>
                <DashNav />
                <div  className="row pa4 ma4">
                    <Courses data={this.state.courses}/>
                </div>
            </div>}

            </div>
        );
    }

}

export default withRouter(Dashboard);