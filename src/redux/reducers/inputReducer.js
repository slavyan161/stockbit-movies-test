const inputReducer = (
    state = {
        searchString: 'superman',
        showOptions: false,
    },
    action
) => {
    switch (action.type) {
        case "SET_SEARCH_STRING":
            return { ...state, searchString: action.payload };
        case "SET_SHOW_OPTIONS":
            return { ...state, showOptions: action.payload };
        default:
            return state;
    }
};

export default inputReducer;
