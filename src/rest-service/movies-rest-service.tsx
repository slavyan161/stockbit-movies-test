import axios from "axios"
import { environment } from "./../react-app-env";

export class MoviesRestService {
    private mainUrl = environment.ENDPOINTS.API_MAIN;

    getMoviesBySearch(searchParam: string) {
        return axios.get(`${this.mainUrl}&s=${searchParam}`)
    }

    getMovieByImbID(id: string) {
        return axios.get(`${this.mainUrl}&i=${id}`);
    }

    getMoviesByPage(search: string, page: number) {
        let pages: string = ''
        if (page) {
            pages = '&page=' + page;
        }
        return axios.get(`${this.mainUrl}&s=${search}${pages}`)
    }
}

export default MoviesRestService
