import React from 'react';


class Card extends React.Component {
        render(){
    return(
        <div className='centre bg-light-blue dib-l br3 pa3 ma4 grow bw2 shadow-5'>
             
            <div>
            <p >{this.props.name}</p>
            <img src={this.props.image} alt="course-logo" width="200px" />
            </div>
        </div>
    );
}
}

export default Card;