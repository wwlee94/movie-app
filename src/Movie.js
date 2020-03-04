import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Movie.css'

// PropTypes 모듈 -> 부모 컴포넌트로부터 넘어오는 변수의 타입 검사해줌

// Functional 컴포넌트
function Movie({ title, poster, genres, synopsis, rating }) {
    return (
        // JSX는 class X, className O
        <div className="Movie">
            <div className="Movie__Column">
                <MoviePoster poster={poster} alt={title}/>
            </div>
            <div className="Movie__Column">
                <h1>{title}</h1>
                <div className="Movie__Genres">
                    {genres.map((genre, index) => <MovieGenre key={index} genre={genre} />)}
                </div>
                <div className="Movie__Synopsis">
                    {synopsis}
                </div>
            </div>
        </div>
    )
}

function MoviePoster({ poster, alt }) {
    return (
        // alt 넣으면 Hover 기능 
        <img src={poster} alt={alt} title={alt} className="Movie__Poster" />
    )
}

function MovieGenre({ genre }) {
    return (
        <span className="Movie__Genre">{genre}</span>
    )
}

Movie.propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
    synopsis: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired
}

MoviePoster.propTypes = {
    poster: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
}

MovieGenre.propTypes = {
    genre: PropTypes.string.isRequired
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