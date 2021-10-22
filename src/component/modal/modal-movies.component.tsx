import './modal-movies.component.css';
export interface IModalMovies {
    modalData: string;
}

function ModalMoviesComponent(modalProps: IModalMovies) {
    return (
        <>
            {modalProps.modalData && (
                <img src={modalProps.modalData} className="img-fluid" alt="img" />
            )}
        </>
    )
}

export default ModalMoviesComponent
