import React from 'react';

const IMG_API = "https://image.tmdb.org/t/p/w1280";

const Movie=({title, original_title, poster_path, overview,release_date, vote_average}) =>(
    <div className="movie">
        <img src={IMG_API + poster_path} alt={title} />
            <div className="movie-info">
                <h3> {title}</h3>
                <span>{vote_average}</span>
            </div>
            <div className="movie-over">
                <h3>{title}</h3>
                <hr/>
                <h4>{release_date} - {original_title}  </h4>
                <h3>Overview: </h3>
                <p>{overview}</p>
            </div>
    </div>
);

export default Movie;