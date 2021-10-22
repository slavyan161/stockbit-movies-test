import axios from "axios"
import { environment } from "./../react-app-env";

export class MoviesRestService {
    private mainUrl = environment.ENDPOINTS.API_MAIN;
    getAllMovies() {
        return axios.get(`${this.mainUrl}&s=Batman`);
    }

    getMoviesBySearch(searchParam: string) {
        return axios.get(`${this.mainUrl}&s=${searchParam}`)
    }

    getMovieByImbID(id: string) {
        return axios.get(`${this.mainUrl}&i=${id}`);
    }

    getMoviesByPage(search: string, page: number) {
        return axios.get(`${this.mainUrl}&s=${search}&page=${page}`)
    }
}

export default MoviesRestService
