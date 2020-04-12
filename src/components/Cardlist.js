import React from 'react';
import NavBar from './NavBar';
import Searchbox from './searchfield';
import Card from './Card';

class Cardlist extends React.Component {

    render( ) {
        const lessonList = [
            {
              name: 'HTML & CSS',
              image: 'https://res.cloudinary.com/undercover/image/upload/v1586649811/VGG-Udemy_clone/html_jh7oq9.png',
            },
            {
              name: 'Sass',
              image: 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/sass.svg',
            },
            {
              name: 'JavaScript',
              image: 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/es6.svg',
            },
            {
              name: 'React',
              image: 'https://res.cloudinary.com/undercover/image/upload/v1586649740/VGG-Udemy_clone/react_f3vtsp.png',
            },
            {
              name: 'PYTHON',
              image: 'https://res.cloudinary.com/undercover/image/upload/v1586649759/VGG-Udemy_clone/python_nbyhp8.png',
            },
            {
              name: 'Node js',
              image: "https://img.icons8.com/color/144/000000/nodejs.png"
            },
            {
              name: 'Angular js',
              image: "https://res.cloudinary.com/undercover/image/upload/v1586649303/VGG-Udemy_clone/angular-icon_yfzdmk.svg"
            },
            {
              name: 'C-SHARP',
              image: "https://res.cloudinary.com/undercover/image/upload/v1586649326/VGG-Udemy_clone/C_Sharp_logo_shqcoo.png"
            },
          ];
    return ( 
    <div >
          <NavBar/>
          <Searchbox searchChange ={this.onSearchChange}/>
        <div className="mt4 pv2">
        { lessonList.map((lessonItem) => {
                return (
                  
                  <Card
                  key = {lessonItem.i} 
                    name={lessonItem.name}
                    image={lessonItem.image}
                
                />
            );   
            })
        }
        </div>
        
    </div>
    
    );
    }
}
export default Cardlist;