import React from 'react';
import Card from './Card';

class Cardlist extends React.Component {

    render( ) {
        const lessonList = [
            {
              name: 'HTML & CSS',
              image: 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/html.svg',
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
              image: 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/react.svg',
            },
            {
              name: 'PHP',
              image: 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/python.svg',
            },
          ];
    return ( 
    <div >
        <div className="mt4 pv4">
        { lessonList.map((lessonItem) => {
                return (
                  <Card
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