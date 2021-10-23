import { useEffect, useState } from 'react'
import MoviesRestService from './../../rest-service/movies-rest-service'
import './list-movies.component.css'
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setShowOptions, setMovies, setModalData, setAutoCompleteData } from './../../redux/actions/index';
import AutoCompleteComponent from '../base/auto-complete/autocomplete.component';
import ButtonComponent from '../base/button/button.component';

function ListMovies() {
    const moviesRestService: MoviesRestService = new MoviesRestService();
    const [page, setPage] = useState(1);
    const [isNoData, setIsNoData] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [isFristLoad, setIsFristLoad] = useState(false)

    const dispatch = useDispatch();
    const inputSelector = useSelector((state: any) => state.input);
    const dataSelector = useSelector((state: any) => state.data);

    window.onscroll = () => {
        if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
            if (!isNoData) {
                setPage(page + 1);
            }
        }
    }

    useEffect(() => {
        setIsLoading(true)
        moviesRestService.getMoviesByPage(inputSelector.searchString, isFristLoad ? page : 0)
            .then((response: any) => {
                if (response?.status === 200 && !response.data?.Error) {
                    const data: any = response.data.Search;
                    dispatch(setMovies(dataSelector.listMovies.concat(data)))
                } else if (response?.data?.Error) {
                    setIsNoData(true);
                }
            })
            .catch((err: any) => console.log(err))
            .finally(() => setIsLoading(false));
    }, [page])

    useEffect(() => {
        setIsLoading(true)
        moviesRestService.getMoviesByPage(inputSelector.searchString, isFristLoad ? page : 0)
            .then((response: any) => {
                if (response?.status === 200 && !response.data?.Error) {
                    const data: any = response.data.Search;
                    dispatch(setAutoCompleteData(dataSelector.autoCompleteData.concat(data)))
                } else if (response?.data?.Error) {
                    setIsNoData(true);
                }
            })
            .catch((err: any) => console.log(err))
            .finally(() => setIsLoading(false));
    }, [inputSelector.searchString])

    function handleSubmit(e: any) {
        e.preventDefault();
        if (inputSelector.searchString) {
            setIsLoading(true);
            moviesRestService.getMoviesBySearch(inputSelector.searchString)
                .then((response: any) => {
                    if (response) {
                        const searchData: any = response?.data?.Search;
                        dispatch(setMovies(searchData))
                    }
                })
                .catch((err: any) => console.log(err))
                .finally(() => setIsLoading(false));
        }
    }



    function onImageClick(linkImage: string) {
        const modal = document.getElementById("myModal");
        if (modal) {
            modal.style.display = "block";
            dispatch(setModalData(linkImage))
        }
    }

    function addDefaultSrc(ev: any) {
        ev.target.src = '/img/placeholder.jpg'
    }

    return (
        <div onClick={() => dispatch(setShowOptions(false))}>
            <div className="row pb-3">
                <div className="col-4">
                    <h1 id="list-movie-header" className="text-left">List Movies</h1>
                </div>
                <div className="search-bar col-8">
                    <div className="form-container">
                        <div className="form-div">
                            <form className="form" onSubmit={handleSubmit}>
                                <div className="row justify-content-end">
                                    <div className="col-4">
                                        <AutoCompleteComponent
                                            isLoading={isLoading}
                                            isFilter={true}
                                            searchString={inputSelector.searchString}
                                            key="Title"
                                            filter={{ filterVariable: 'Title', listFilterData: dataSelector.autoCompleteData }}
                                        />
                                    </div>
                                    <div className="col-1">
                                        <ButtonComponent type="submit" className="btn btn-primary" title="Search" />
                                    </div>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                {dataSelector?.listMovies?.map((values: any, index: number) => (
                    <div className="col-3 my-5" data-testid="item" key={index}>
                        <div className="movies-card mx-1 px-2">
                            <img onError={(ev) => addDefaultSrc(ev)} src={values?.Poster} onClick={() => onImageClick(values?.Poster)} alt={values?.Title} className="img-fluid movies-img" style={{ paddingTop: '15px' }} />
                            <div style={{ paddingTop: '20px', paddingBottom: '20px' }}>
                                <Link to={`/detail/${values?.imdbID}`}>{values?.Title}</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ListMovies
