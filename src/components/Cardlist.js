import React from 'react';
import NavBar from './NavBar';
import Searchbox from './searchfield';
import axios from 'axios';
import {withRouter} from 'react-router-dom';

class Cardlist extends React.Component {

  componentDidMount() {
      axios.get(`https://oauth2.googleapis.com/tokeninfo?id_token=${window.localStorage.getItem("token_id")}`)
      .then(res => {
        console.log(res.data)
          if (res.data !== undefined && res.data.name !== undefined) {
            window.localStorage.setItem('name', res.data.name);
              this.props.history.push({pathname : '/dashboard', state:{loginSuccessful:"loginmarked", isStudent:window.localStorage.getItem('isStudent')}});
          }
      }).catch(err=> {
          console.log(err);
          window.localStorage.removeItem('isStudent');
          window.localStorage.removeItem('token_id');
      });
  }

    render( ) {
        const lessonList = [
            {
              id : "html-css",
              name: 'HTML & CSS',
              image: 'https://res.cloudinary.com/undercover/image/upload/v1586649811/VGG-Udemy_clone/html_jh7oq9.png',
            },
            {
              id : "sass",
              name: 'Sass',
              image: 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/sass.svg',
            },
            {
              id : "javascript",
              name: 'JavaScript',
              image: 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/es6.svg',
            },
            {
              id : "react",
              name: 'React',
              image: 'https://res.cloudinary.com/undercover/image/upload/v1586649740/VGG-Udemy_clone/react_f3vtsp.png',
            },
            {
              id : "python",
              name: 'PYTHON',
              image: 'https://res.cloudinary.com/undercover/image/upload/v1586649759/VGG-Udemy_clone/python_nbyhp8.png',
            },
            {
              id : "nodejs",
              name: 'Node js',
              image: "https://img.icons8.com/color/144/000000/nodejs.png"
            },
            {
              id : "angularjs",
              name: 'Angular js',
              image: "https://res.cloudinary.com/undercover/image/upload/v1586649303/VGG-Udemy_clone/angular-icon_yfzdmk.svg"
            },
            {
              id : "csharp",
              name: 'C-SHARP',
              image: "https://res.cloudinary.com/undercover/image/upload/v1586649326/VGG-Udemy_clone/C_Sharp_logo_shqcoo.png"
            },
          ];
    return ( 
        <div> 
              <NavBar />
              <Searchbox searchChange={this.onSearchChange} />
             
              <div className="container-fluid mt4">
                <div className="row justify-content-center">
                  {
                    lessonList.map((lessonItem) => 
                      <div className="col-sm-3 col-xs-6 grow br3 tc ma4 bg-light-blue pa2 shadow-2">
                        <p >{lessonItem.name}</p>
                        <img src={lessonItem.image} alt="course-logo" width="200px" />
                      </div>)
                  }
                </div>
              </div>
                
        </div>      
    )
  } 
}
export default withRouter(Cardlist);