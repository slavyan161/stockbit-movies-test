import './home.component.css'
import ModalMoviesComponent from '../../component/modal/modal-movies.component'
import ListMovies from './../../component/list/list-movies.component'
import { setModalData } from './../../redux/actions/index';
import { useDispatch, useSelector } from "react-redux";

function Home() {
    const dispatch = useDispatch();
    const dataSelector = useSelector((state: any) => state.data);

    function closeModal() {
        const modal = document.getElementById("myModal");
        if (modal) {
            modal.style.display = "none";
            dispatch(setModalData(''))
        }
    }
    return (
        <div className="py-5">
            <div className="container">
                <ListMovies />
            </div>
            <div id="myModal" className="modal">
                <div className="modal-content">
                    <span id="close" className="close" onClick={closeModal}>&times;</span>
                    <ModalMoviesComponent modalData={dataSelector.modalData} />
                </div>
            </div>
        </div>
    )
}

export default Home
