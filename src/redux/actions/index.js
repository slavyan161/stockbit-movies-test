export const setMovies = (movies) => ({
  type: "SET_MOVIES",
  payload: movies,
});

export const setAutoCompleteData = (autoCompleteData) => ({
  type: "SET_AUTOCOMPLETE_DATA",
  payload: autoCompleteData,
});

export const setSearchString = (searchString) => ({
  type: "SET_SEARCH_STRING",
  payload: searchString,
});

export const setShowOptions = (showOptions) => ({
  type: "SET_SHOW_OPTIONS",
  payload: showOptions,
});

export const setModalData = (modalData) => ({
  type: "SET_MODAL_DATA",
  payload: modalData,
});