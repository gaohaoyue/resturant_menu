import axios from 'axios';
// import dispatch from 'redux-thunk';

function fetchCategoriesStart() {
    console.log('categories fetch start');
    return {
        type: 'CATEGORIES_FETCH_START'
    }
}

function fetchCategoriesSuccess(response) {
    console.log('categories fetch success!');
    return {
        type: 'CATEGORIES_FETCH_SUCCESS',
        data: response.data
    }
}

function fetchCategoriesError(error) {
    return {
        type: 'CATEGORIES_FETCH_ERROR',
        error: error
    }
}


export const getCategoriesLists = () => {

    return (dispatch, getState) => {
        dispatch(fetchCategoriesStart());
        axios.get('http://stream-restaurant-menu-svc.herokuapp.com/category')
            .then((response) => {
                console.log('The categories are: ');
                console.log(response.data);
                dispatch(fetchCategoriesSuccess(response));
            })
            .catch((error) => {
                dispatch(fetchCategoriesError());
            })
    }
}

function fetchDetailStart() {
    console.log('fetch detail start');
    return {
        type: 'DETAILS_FETCH_START'
    }
}

function fetchDetailSuccess(response,shortName) {
    console.log('fetch detail success!');
    return {
        type: 'DETAILS_FETCH_SUCCESS',
        data: response.data,
        shortName: shortName
    }
}

function fetchDetailError(error) {
    return {
        type: "DETAILS_FETCH_ERROR",
        error: error
    }
}
export const getDetail = (shortName) => {
    return (dispatch, getState) => {
        dispatch(fetchDetailStart());
        axios.get(`http://stream-restaurant-menu-svc.herokuapp.com/item?category=${shortName}`)
        .then((response) =>{
            console.log('The details are:');
            console.log(response.data);
            dispatch(fetchDetailSuccess(response,shortName));
        })
        .catch((error) => {
            dispatch(fetchDetailError(error));
        })
    }
}