import  React,{useState} from "react";
import {FaStar} from 'react-icons/fa';

// import {StarRatings} from 'react-star-ratings';
 
// class VideoRating extends React.Component {
//     changeRating( newRating, name ) {
//       this.setState({
//         rating: newRating
//       });
//     }
 
//     render() {
//       // rating = 2;
//       return (
//         <StarRatings
//           rating={this.state.rating}
//           starRatedColor="golden"
//           changeRating={this.changeRating}
//           numberOfStars={5}
//           name='rating'
//         />
//       );
//     }
// }
 
 
// class StarBar extends React.Component {
//   render() {
//     // aggregateRating = 2.35;
//     return (
//       <StarRatings
//         rating={2.403}
//         starDimension="20px"
//         starSpacing="3px"
//       />
//     );
//   }
// }
// export default StarBar + ;


const StarRating =()=>{
  const[ rating, setRating] = useState('');
  const[ hover, setHover] = useState('');
  return (
    <div>
      {[...Array(6)].map((star, i) => { 
        const ratingValue = i++ ;
      return(
        <label>
          <input type="radio" style ={{display:"none"}} name="rating" value ="ratingValue" 
          onClick = {()=>setRating(ratingValue)} 
          
           />
          <FaStar 
          className = "pointer" 
          onMouseEnter = {()=>setHover(ratingValue)}
          onMouseLeave = {()=>setHover(null)}
          color={ratingValue <= (hover ||rating ) ? "#ffc107" : "#e4e5e9 "}
          size = {20} 
           />
        </label>
       
        );
       })} 
       {/* <div>{`${rating}? rated ${rating}: ""`}</div> */}
     </div>
  )
};

export default StarRating;