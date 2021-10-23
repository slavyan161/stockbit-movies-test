import React, { useEffect, useState } from 'react'
import MoviesRestService from '../../../rest-service/movies-rest-service';
import ParserService from '../../../service/parser.service';
export interface IDetailMovie {
    Title: string;
    Poster: string;
    Genre: string;
}

function DetailComponent() {
    const parserService: ParserService = new ParserService();
    const moviesRestService: MoviesRestService = new MoviesRestService();
    const [movieData, setMovieData] = useState<undefined | IDetailMovie>()
    const queryString = window.location.pathname.split('/');
    useEffect(() => {
        moviesRestService.getMovieByImbID(queryString[queryString.length - 1]).then((response: any) => {
            if (response.data) {
                const data: any = response.data;
                setMovieData(data);
            }
        });
    })

    return (
        <div className="container py-5">
            <h2>{movieData?.Title}</h2>
            <img src={movieData?.Poster} alt={movieData?.Title} />

            <div className="pt-4">
                Genre : 
                {movieData && parserService?.convertFromStringToArray(movieData?.Genre)?.map(value => {
                    return <button className="btn btn-primary mx-1 ">{value}</button>
                })}
            </div>
        </div>
    )
}

export default DetailComponent
