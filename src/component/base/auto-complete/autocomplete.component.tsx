import { setSearchString, setShowOptions } from '../../../redux/actions/index';
import { useDispatch, useSelector } from "react-redux";

export interface IAutoComplete {
    isLoading: boolean;

    //if want to using filter fn
    isFilter?: boolean;
    searchString: string;
    filter?: {
        filterVariable: string;
        listFilterData: [];
    }
}

function AutoCompleteComponent(props: IAutoComplete) {
    const dispatch = useDispatch();
    const inputSelector = useSelector((state: any) => state.input);

    function handleSearch(e: any) {
        const value = e.target.value;

        if (value !== "") {
            dispatch(setShowOptions(true));
        } else {
            dispatch(setShowOptions(false));
        }

        dispatch(setSearchString(e.target.value));
    }

    return (
        <div>
            <input
                type="text"
                name="name"
                className="form-control"
                value={inputSelector.searchString}
                onChange={handleSearch}
                onClick={() => dispatch(setShowOptions(true))}
            />
            {inputSelector.showOptions ? (
                <div className="options-container">
                    {props.isLoading ? (
                        <div className="option">Loading... </div>
                    ) : (
                        props.filter?.listFilterData
                            .filter((x: any) => {
                                if (x && props.isFilter && props.filter) {
                                    return x[props?.filter?.filterVariable].toLowerCase().includes(props.searchString?.toLowerCase())
                                }
                            })
                            .map((option: any, index: number) => (
                                <div
                                    key={`${props.filter ? option[props?.filter?.filterVariable] : ''}-${index}`}
                                    className="option"
                                    onClick={() => {
                                        dispatch(setSearchString(props.filter ? option[props?.filter?.filterVariable] : ''));
                                        dispatch(setShowOptions(false));
                                    }}
                                >
                                    {props.filter ? option[props?.filter?.filterVariable] : ''}
                                </div>
                            ))
                    )}
                </div>
            ) : null}
        </div>
    )
}

export default AutoCompleteComponent
