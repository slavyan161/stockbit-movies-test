const dataReducer = (
    state = {
        listMovies: [],
        modalData: '',
        autoCompleteData: []
    },
    action
) => {
    switch (action.type) {
        case "SET_MOVIES":
            return { ...state, listMovies: action.payload };
        case "SET_MODAL_DATA":
            return { ...state, modalData: action.payload };
        case "SET_AUTOCOMPLETE_DATA":
            return { ...state, autoCompleteData: action.payload };
        default:
            return state;
    }
};

export default dataReducer;
