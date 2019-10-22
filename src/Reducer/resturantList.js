const initialState = {
    categories: [], 
    details: [], 
    shortName: '',
    isFetchingCategories: false,
    isFetchingDetails: false, 
    error: null
};

const resturantList = (state = initialState, action) => {
    switch (action.type) {
        case 'CATEGORIES_FETCH_START':
            return {
                ...state,
                isFetchingCategories: true
            }
        case 'CATEGORIES_FETCH_SUCCESS':
            return {
                ...state,
                isFetchingCategories: false,
                categories: action.data
            }
        case 'CATEGORIES_FETCH_ERROR':
            return {
                ...state,
                error: action.error
            }
        case 'DETAILS_FETCH_START':
            return {
                ...state,
                isFetchingDetails: true
            }
        case 'DETAILS_FETCH_SUCCESS':
            return {
                ...state,
                isFetchingDetails: false,
                details: action.data,
                shortName: action.shortName

            }
        case 'DETAILS_FETCH_ERROR':
            return {
                ...state,
                error: action.error
            }
        default:
            return state;
    }
}


export default resturantList;