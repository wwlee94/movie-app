import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Movie.css'

// PropTypes 모듈 -> 부모 컴포넌트로부터 넘어오는 변수의 타입 검사해줌

// Functional 컴포넌트
function Movie({title, poster}){
    return (
        <div>
            <MoviePoster poster={poster} />
            <h1>{title}</h1>
        </div>
    )
}

function MoviePoster({poster}){
    return (
        <img src={poster} />
    )
}

Movie.propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
}

MoviePoster.propTypes = {
    poster: PropTypes.string.isRequired
}

// Class 컴포넌트
// class Movie extends Component {
//     static propTypes = {
//         title: PropTypes.string.isRequired,
//         poster: PropTypes.string.isRequired
//     }

//     render() { 
//         return (
//             <div>
//                 <MoviePoster poster={this.props.poster} />
//                 <h1>{this.props.title}</h1>
//             </div>
//         )
//     }
// }
export default Movie;